import { allJobsSamir } from "./all_jobs_samir.ts";
import { allJobsVineet } from "./all_jobs_vineet.ts";
import {
    createBulkEquipmentDefaults,
    createBulkEquipmentFromCSV,
} from "./createEquipment/index.ts";
import { getAppointments } from "./getData/getAppointments.ts";
import {
    getEquipment,
    getEquipmentByGPEquipmentID,
} from "./getData/getEquipment.ts";
import { getTasks } from "./getData/getTasks.ts";
import { addOrUpdate } from "./makeRequest.ts";

getTasks;
getAppointments;
getEquipment;
createBulkEquipmentFromCSV;
createBulkEquipmentDefaults;

process.loadEnvFile(".env");
export const cookies = {
    "ASP.NET_SessionId": process.env.SESSION_ID || "",
    ".ASPXAUTH": process.env.AUTH_TOKEN || "",
};

const location = {
    // call.{}
    gpcustomernumber: "CAMGRO01",
    gplocationnumber: "1010 NEPEAN HW",
    locationid:
        "location:7132ed53-5cdc-43e7-8550-54e74cdf45ca:1010 NEPEAN HW - ABLE - 1010 NEPEAN HIGHWAY",
    // locationid:
    //     "location:7bc69ce6-09ff-4639-9fbb-2b8ebe765ffe:PRIMARY - Smorgon House Jewish Care Carn",
};

const includeOnly: string[] = [];
const exclude: string[] = [];

async function main() {
    // const appointments = (await getAppointments("VSWAMI")).map(
    //     (appointment) => ({
    //         startdate: appointment.startdate,
    //         gpservicecallid: appointment.gpservicecallid,
    //         gpcustomernumber: appointment.location.gpcustomernumber,
    //         gplocationnumber: appointment.location.gplocationnumber,
    //         locationid: appointment.call.locationid,
    //         city: appointment.location.city,
    //         employeename: appointment.employee.employeename,
    //         calldescription: appointment.call.description,
    //     }),
    // );
    // return console.log(appointments, `\nTotal records: ${appointments.length}`);

    const equipment = (await getEquipment(location.locationid)).map(
        (equipment) => ({
            barcode: equipment.barcode,
            gpequipmentid: equipment.gpequipmentid,
            customernumber: equipment.gpuserdefine1a,
            equipmenttype: equipment.equipmenttype.name,
            manufacturerName: equipment.manufacturer.name,
            modelnumber: equipment.modelnumber,
            serialnumber: equipment.serialnumber,
            manufacturedate: equipment.gpuserdefine9a,
            room: equipment.gpsublocationid,
            gpcustomernumber: equipment.gpcustomernumber,
            gplocationnumber: equipment.gplocationnumber,
            locationid: equipment.locationid,
        }),
    );
    return console.log(equipment, `\nTotal records: ${equipment.length}`);

    // const locations = (await getLocations({ searchText: "%Campeyn%", searchField: "customername" })).map((location) => ({
    //     id: location.id,
    //     name: location.name,
    //     city: location.city,
    //     customername: location.customer.customername
    // }));
    // return console.log(locations, `\nTotal records: ${locations.length}`);

    // const tasks = await getTasks(10);
    // console.log(tasks, `\nTotal records: ${tasks.length}`);

    // return await createBulkEquipmentFromCSV({
    //     csvFileName: "export.csv",
    //     locationData: location,
    //     includeOnly,
    //     exclude,
    //     checkOnly: false,
    // });

    // return await createBulkEquipmentDefaults({
    //     locationData: location,
    //     checkOnly: false,
    //     equipmentToCreate: {
    //         "BED ELECTRIC": { amount: 129, manufacturer: "OTHER",  model: "HUMAN CARE"},
    //         SLING: {amount: 40, manufacturer: "ASPIRE", model: "LSS390760"},
    //         TRACK: {amount: 0},
    //         "CEILING HOIST": {amount: 0},
    //         "FLOOR HOIST": {amount: 10, manufacturer: "AIDACARE"},
    //         BATTERY: {amount: 15, manufacturer: "LINAK", model: "BAJ1"},
    //         CHARGER: {amount: 10, manufacturer: "LINAK", model: "J1CH"},
    //         MATTRESS: {amount: 0},
    //         PUMP: {amount: 0},
    //         COMMODE: {amount: 0},
    //         "WEIGH SCALE": {amount: 0},
    //         "WEIGH CHAIR": {amount: 5},
    //     }
    // })

    // return console.log(await getData(equipmentTypeBody));
}











// async function fixGPLocationNumbers() {
//     for (const job of allJobsSamir.concat(allJobsVineet)) {
//         if (job.locationid !== location.locationid) continue;
//         const assetNumbers = job.assets;
//         if (assetNumbers.length === 0) continue;

//         const attributes = {
//             gpcustomernumber: job.gpcustomernumber,
//             gplocationnumber: job.gplocationnumber,
//             locationid: job.locationid,
//         };

//         console.log(`Starting fix for ${job.locationid}`);
//         const equipmentIDs: string[] = [];

//         for (const assetNumber of assetNumbers) {
//             const equipment = await getEquipmentByGPEquipmentID(assetNumber);
//             if (equipment?.id) equipmentIDs.push(equipment.id);
//         }

//         for (let i = 0; i < equipmentIDs.length; i++) {
//             const id = equipmentIDs[i];
//             console.log(`Fixing ${i + 1}/${equipmentIDs.length}: ${id}`);
//             await addOrUpdate({
//                 entityName: "equipment",
//                 id,
//                 attributes,
//                 checkOnly: false,
//             });
//         }
//     }
// }

main();
// fixGPLocationNumbers();
