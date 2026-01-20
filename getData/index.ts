import { XMLParser } from "fast-xml-parser";
import { makeRequest } from "../makeRequest.ts";
import nestLinkedEntities from "../utils/nestLinkedEntities.ts";

export async function getData<T extends object = object>(xmlBody: string): Promise<T[]> {
    const data = await makeRequest(xmlBody);
    const parser = new XMLParser();
    const jObj = parser.parse(data || "");
    const rawEntities = jObj?.EntitySet?.Entities?.Entity ?? [];

    const entitiesArray = Array.isArray(rawEntities)
        ? rawEntities
        : [rawEntities];

    return entitiesArray.map((e) => nestLinkedEntities<T>(e))
}
