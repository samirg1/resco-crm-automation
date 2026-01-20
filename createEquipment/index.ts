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
            gplocationnumber: "PRIMARY",
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

    console.log(
        "Total equipment to create:",
        filteredEquipmentDataList,
        "\nTotal: ",
        filteredEquipmentDataList.length,
    );

    const checks = [
        `About to create ${filteredEquipmentDataList.length} equipment items (checkonly = ${data.checkOnly}). Type "YES" to proceed: `,
    ];

    if (!data.checkOnly)
        checks.push(
            `You have set CHECK_ONLY off. Real changes will be made. Type "YES" to proceed: `,
        );

    for (const check of checks) {
        const answer = prompt(check);
        if (answer !== "YES") return console.log("Aborting.");
    }

    for (let i = 0; i < filteredEquipmentDataList.length; i++) {
        const equipmentData = filteredEquipmentDataList[i];
        console.log(`Creating equipment ${i+1}/${filteredEquipmentDataList.length}:`, equipmentData.logicalName);
        await createEquipment(equipmentData, data.locationData, data.checkOnly);
    }
}
