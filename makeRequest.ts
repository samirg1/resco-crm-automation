import { XMLParser } from "fast-xml-parser";
import { cookies } from "./index.ts";
import { buildEntityXml } from "./utils/buildEntityXML.ts";

const BLUE = "\x1b[34m";
const RESET = "\x1b[0m";

function colorXmlTags(xml: string) {
    // color anything that looks like an XML tag
    return xml.replace(/(<\/?[^>]+>)/g, `${BLUE}$1${RESET}`);
}

export async function addOrUpdate({
    entityName,
    id,
    attributes,
    checkOnly,
}: {
    entityName: "equipment" | "appointment";
    id?: string | undefined;
    attributes: Record<string, any>;
    checkOnly: boolean;
}) {
    const xmlBody = buildEntityXml({
        entityName,
        id,
        attributes,
    });

    if (checkOnly) return console.log(colorXmlTags(xmlBody));
    const data = await makeRequest(xmlBody, "/Execute");
    console.log(data);
    const parser = new XMLParser();
    const jObj = parser.parse(data || "");
    const result = jObj?.Response?.Result;
    if (result)
        console.log("\x1b[32m%s\x1b[0m", `Success: ${jObj?.Response?.Result}`);
    else console.log("\x1b[31m%s\x1b[0m", `Fail: ${jObj?.Response?.Result}`);
}

export async function makeRequest(
    xmlBody: string,
    extraURL: "/Execute" | "" = "",
): Promise<string | undefined> {
    const url = `https://mobiletech.aidacare.com.au/rest/v1/data/handr${extraURL}`;
    const method = "POST";
    const headers = {
        "Content-Type": "application/xml",
    };
    try {
        const response = await fetch(url, {
            method,
            body: xmlBody,
            credentials: "include",
            redirect: "follow",
            headers: {
                ...headers,
                Cookie: Object.entries(cookies)
                    .map(([key, value]) => `${key}=${value}`)
                    .join("; "),
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.text();
    } catch (error) {
        console.error("Error making request:", error);
    }
}
