import fs from "fs";
import path from "path";

function extractDataFromCSV(csvFileName: string): Record<string, string>[] {
    const results: Record<string, string>[] = [];

    const csvFilePath = path.resolve(csvFileName);
    const fileContent = fs.readFileSync(csvFilePath, "utf-8");

    const lines = fileContent.split("\n").map(line => line.trim()).filter(line => line.length > 0);
    if (lines.length === 0) {
        return results;
    }


    const headers = lines[0].split(";").map(header => header.trim());

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(";").map(value => value.trim());
        const record: Record<string, string> = {};

        headers.forEach((header, index) => {
            record[header] = values[index].replaceAll("\"", "") || "";
        });

        results.push(record);
    }

    return results;
}

export { extractDataFromCSV };
