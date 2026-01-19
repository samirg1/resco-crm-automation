import {
    createBulkEquipmentFromCSV,
    createEquipment,
    transformCSVDataToEquipmentData,
} from "./createEquipment/index.ts";

import { getData } from "./makeRequest.ts";
import { equipmentBody } from "./testXMLBodies.ts";

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
    gpcustomernumber: "BENETAS-BROUGHT",
    locationid:
        "location:f5f6827a-9ef7-4209-bdbd-f0efd2204676:PRIMARY - Benetas - Broughton Hall",
};

const includeOnly: string[] = ["1783_0116", "361530"];
const exclude: string[] = [];

async function main() {
    // return await getData(equipmentBody);
    return await createBulkEquipmentFromCSV({
        csvFileName: "export.csv",
        locationData: location,
        includeOnly,
        exclude,
        checkOnly: true,
    });
}

main();
