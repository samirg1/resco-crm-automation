import {
    createBulkEquipmentFromCSV,
    createEquipment,
    transformCSVDataToEquipmentData,
} from "./createEquipment/index.ts";

import { getData } from "./makeRequest.ts";
import { body2, equipmentBody } from "./testXMLBodies.ts";

getData;
equipmentBody;
transformCSVDataToEquipmentData;
createEquipment;

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
    return await getData(equipmentBody(location.locationid));
    // return await createBulkEquipmentFromCSV({
    //     csvFileName: "export (49).csv",
    //     locationData: location,
    //     includeOnly,
    //     exclude,
    //     checkOnly: false,
    // });
}

main();
