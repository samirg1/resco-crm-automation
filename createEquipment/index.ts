import PromptSync from "prompt-sync";
import { addOrUpdate } from "../makeRequest.ts";
import { extractDataFromCSV } from "../utils/getDataFromCSV.ts";
import { getEquipmentTypeLineByName } from "./getEquipmentType.ts";
import { getManufacturerLine } from "./getManufacturer.ts";
import { getSWL } from "./getSWL.ts";

const prompt = PromptSync();

type EquipmentData = {
    logicalName: string;
    description: string;
    manufacturer: string;
    model: string;
    serialNumber: string;
    room: string;
    manufacturerDate: string | undefined;
};

type LocationData = {
    gpcustomernumber: string;
    gplocationnumber: string;
    locationid: string;
};

export function transformCSVDataToEquipmentData(
    csvFileName: string,
): EquipmentData[] {
    const csvData = extractDataFromCSV(csvFileName);
    return csvData.map((row) => ({
        logicalName: row["BMI Number"],
        description: row["ECRI Description"],
        manufacturer: row.Manufacturer,
        model: row.Model,
        serialNumber: row["Serial No."],
        room: row.Room,
        manufacturerDate: row["Install Date"],
    }));
}

export async function createEquipment(
    equipmentData: EquipmentData,
    locationData: LocationData,
    checkOnly: boolean,
): Promise<EquipmentData> {
    const equipmenttypeid = getEquipmentTypeLineByName(
        equipmentData.description,
    );
    const manufacturerid = getManufacturerLine(equipmentData.manufacturer);
    const swl = getSWL(equipmentData.description);

    const shortenedEquipmentData = Object.fromEntries(
        Object.entries(equipmentData).map(([key, value]) => [
            key,
            value ? value.slice(0, 20) : value,
        ]),
    ) as EquipmentData;

    await addOrUpdate({
        entityName: "equipment",
        attributes: {
            equipmenttypeid,
            manufacturerid,
            gpcustomernumber: locationData.gpcustomernumber,
            locationid: locationData.locationid,
            serialnumber: shortenedEquipmentData.serialNumber,
            modelnumber: shortenedEquipmentData.model,
            equipmentdescription2: shortenedEquipmentData.description,
            gpsublocationid: shortenedEquipmentData.room,

            barcode: `GENERATED-${shortenedEquipmentData.logicalName}`, // generated part for searching, goes into unassigned, assign and search by logicalname, if not found during service search by generated to re-unassign
            gpuserdefine1a: shortenedEquipmentData.logicalName, // customer barcode
            gpuserdefine2a: "Good", // condition
            gpuserdefine4a: swl, // swl
            gpuserdefine9a: "2016-01-01T13:00:00Z", // manufacture date

            componentquantity: 0,
            createdby:
                "systemuser:4f157262-504f-44df-983c-6c80f025c2a4:Samir Gupta",
            gpequipmentid: "PENDING",
            gplocationnumber: locationData.gplocationnumber,
            latitude: 0,
            longitude: 0,
            name: "PENDING",
            refrigerantequipmenttypeid:
                "refrigerantequipmenttype:d86e4db1-bbce-429d-942a-9b437aa78153:0 - Not Applicable",
        },
        checkOnly,
    });
    return equipmentData;
}

type DefaultCreateEquipmentData = {
    manufacturer?: string;
    model?: string;
    amount: number;
};

type CreateBulkEquipmentDefaultsParams = {
    locationData: LocationData;
    equipmentToCreate: {
        "BED ELECTRIC"?: DefaultCreateEquipmentData;
        SLING?: DefaultCreateEquipmentData;
        TRACK?: DefaultCreateEquipmentData;
        "CEILING HOIST"?: DefaultCreateEquipmentData;
        "FLOOR HOIST"?: DefaultCreateEquipmentData;
        BATTERY?: DefaultCreateEquipmentData;
        CHARGER?: DefaultCreateEquipmentData;
        MATTRESS?: DefaultCreateEquipmentData;
        PUMP?: DefaultCreateEquipmentData;
        COMMODE?: DefaultCreateEquipmentData;
        "WEIGH SCALE"?: DefaultCreateEquipmentData;
        "WEIGH CHAIR"?: DefaultCreateEquipmentData;
    };
    checkOnly: boolean;
};

export async function createBulkEquipmentDefaults(
    data: CreateBulkEquipmentDefaultsParams,
) {
    const equipmentDataList: EquipmentData[] = [];

    for (const [key, value] of Object.entries(data.equipmentToCreate)) {
        for (let i = 0; i < value.amount; i++) {
            equipmentDataList.push({
                logicalName: `.${key}.`,
                description: key,
                manufacturer: value.manufacturer ?? "",
                model: value.model ?? "",
                serialNumber: "",
                room: "",
                manufacturerDate: undefined,
            });
        }
    }

    await createBulkEquipment(
        equipmentDataList,
        data.locationData,
        data.checkOnly,
    );
}

type CreateBulkEquipmentFromCSVParams = {
    csvFileName: string;
    locationData: LocationData;
    includeOnly: string[];
    exclude: string[];
    checkOnly: boolean;
};

export async function createBulkEquipmentFromCSV(
    data: CreateBulkEquipmentFromCSVParams,
) {
    const equipmentDataList = transformCSVDataToEquipmentData(data.csvFileName);
    const filteredEquipmentDataList = equipmentDataList.filter(
        (ed) =>
            (data.includeOnly.length === 0 ||
                data.includeOnly.some((inc) => ed.logicalName.includes(inc))) &&
            !data.exclude.some((exc) => ed.logicalName.includes(exc)),
    );

    await createBulkEquipment(
        filteredEquipmentDataList,
        data.locationData,
        data.checkOnly,
    );
}

async function createBulkEquipment(
    equipmentDataList: EquipmentData[],
    locationData: LocationData,
    checkOnly: boolean,
) {
    console.log(
        "Total equipment to create:",
        equipmentDataList,
        "\nTotal: ",
        equipmentDataList.length,
    );

    if (equipmentDataList.length === 0) return console.log("No equipment to create.");

    const checks = [
        `About to create ${equipmentDataList.length} equipment items (checkonly = ${checkOnly}). Type "YES" to proceed: `,
    ];

    if (!checkOnly)
        checks.push(
            `You have set CHECK_ONLY off. Real changes will be made. Type "YES" to proceed: `,
        );

    for (const check of checks) {
        const answer = prompt(check);
        if (answer !== "YES") return console.log("Aborting.");
    }

    for (let i = 0; i < equipmentDataList.length; i++) {
        const equipmentData = equipmentDataList[i];
        console.log(
            `Creating equipment ${i + 1}/${equipmentDataList.length}:`,
            equipmentData.logicalName,
        );
        await createEquipment(equipmentData, locationData, checkOnly);
    }
}
