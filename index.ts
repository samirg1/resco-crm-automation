import {
    createEquipment,
    transformCSVDataToEquipmentData,
} from "./createEquipment/index.ts";
import { getAppointments } from "./getData/getAppointments.ts";
import { getEquipment } from "./getData/getEquipment.ts";

process.loadEnvFile(".env");
export const cookies = {
    "ASP.NET_SessionId": process.env.SESSION_ID || "",
    ".ASPXAUTH": process.env.AUTH_TOKEN || "",
};

const location = {
    // call.{}
    gpcustomernumber: "CAMGRO01",
    locationid:
        "location:7132ed53-5cdc-43e7-8550-54e74cdf45ca:1010 NEPEAN HW - ABLE - 1010 NEPEAN HIGHWAY",
};

const includeOnly: string[] = [];
const exclude: string[] = [];

async function main() {
    // const appointments = (await getAppointments("SGUPTA")).map(
    //     (appointment) => ({
    //         startdate: appointment.startdate,
    //         gpcustomernumber: appointment.location.gpcustomernumber,
    //         locationid: appointment.call.locationid,
    //         city: appointment.location.city,
    //         employeename: appointment.employee.employeename,
    //     }),
    // );
    // return console.log(appointments, `\nTotal records: ${appointments.length}`);

    // const equipment = (await getEquipment(location.locationid)).map(
    //     (equipment) => ({
    //         barcode: equipment.barcode,
    //         manufacturerName: equipment.manufacturer.name,
    //         modelnumber: equipment.modelnumber,
    //         serialnumber: equipment.serialnumber,
    //         room: equipment.gpsublocationid,
    //         equipmentTypeName: equipment.equipmenttype.name,
    //         locationName: equipment.location.name,
    //     }),
    // );
    // return console.log(equipment, `\nTotal records: ${equipment.length}`);
    // return await createBulkEquipmentFromCSV({
    //     csvFileName: "export (49).csv",
    //     locationData: location,
    //     includeOnly,
    //     exclude,
    //     checkOnly: false,
    // });
}

main();
