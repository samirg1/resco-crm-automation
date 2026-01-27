import { createBulkEquipmentFromCSV } from "./createEquipment/index.ts";
import { getAppointments } from "./getData/getAppointments.ts";
import { getEquipment } from "./getData/getEquipment.ts";
import { getTasks } from "./getData/getTasks.ts";
import { getData } from "./getData/index.ts";
import { equipmentTypeBody } from "./testXMLBodies.ts";

getTasks;
getAppointments;
getEquipment;
createBulkEquipmentFromCSV;

process.loadEnvFile(".env");
export const cookies = {
    "ASP.NET_SessionId": process.env.SESSION_ID || "",
    ".ASPXAUTH": process.env.AUTH_TOKEN || "",
};

const location = {
    // call.{}
    gpcustomernumber: "CAMGRO01",
    locationid:
        "location:6febc7c4-d832-4b80-8da1-c0480ceb5bbd:8B CULLITON RD - ABLE - 8B CULLITON ROAD",
};

const includeOnly: string[] = [];
const exclude: string[] = [];

async function main() {
    const appointments = (await getAppointments("VSWAMI", 5)
    ).map(
        (appointment) => ({
            startdate: appointment.startdate,
            gpcustomernumber: appointment.location.gpcustomernumber,
            locationid: appointment.call.locationid,
            city: appointment.location.city,
            employeename: appointment.employee.employeename,
        }),
    );
    return console.log(appointments, `\nTotal records: ${appointments.length}`);

    // const equipment = (await getEquipment(location.locationid)).map(
    //     (equipment) => ({
    //         barcode: equipment.barcode,
    //         customernumber: equipment.gpuserdefine1a,
    //         equipmenttype: equipment.equipmenttype.name,
    //         manufacturerName: equipment.manufacturer.name,
    //         modelnumber: equipment.modelnumber,
    //         serialnumber: equipment.serialnumber,
    //         manufacturedate: equipment.gpuserdefine9a,
    //         room: equipment.gpsublocationid,
    //         locationName: equipment.location.name,
    //     }),
    // );
    // return console.log(equipment, `\nTotal records: ${equipment.length}`);

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

    return console.log(await getData(equipmentTypeBody));
}

main();
