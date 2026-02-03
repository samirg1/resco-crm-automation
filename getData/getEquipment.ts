import { getData } from "./index.ts";

export const getEquipment = async (locationid: string, count: number = 500): Promise<Equipment[]> => {
    const body = `
<fetch distinct='1'  version="1.0" page="1" aggregate="false" count="${count}" resultformat="JSON">
    <entity name="equipment">
        <all-attributes />
        <link-entity name="equipmenttype" from="id" to="equipmenttypeid" link-type="outer" alias="equipmenttype">
            <all-attributes />
        </link-entity>
        <link-entity name="manufacturer" from="id" to="manufacturerid" link-type="outer" alias="manufacturer">
            <all-attributes />
        </link-entity>
        <link-entity name="location" from="id" to="locationid" link-type="outer" alias="location">
            <all-attributes />
        </link-entity>
        <filter type="and">
             <condition attribute="locationid" operator="eq" value="${locationid}" /> 

        </filter>
    </entity>
</fetch>`;

    return await getData<Equipment>(body);
};

export const getEquipmentByGPEquipmentID = async (gpequipmentid: string): Promise<Equipment | null> => {
    const body = `
<fetch distinct='1'  version="1.0" page="1" aggregate="false" count="2" resultformat="JSON">
    <entity name="equipment">
        <all-attributes />
        <link-entity name="equipmenttype" from="id" to="equipmenttypeid" link-type="outer" alias="equipmenttype">
            <all-attributes />
        </link-entity>
        <link-entity name="manufacturer" from="id" to="manufacturerid" link-type="outer" alias="manufacturer">
            <all-attributes />
        </link-entity>
        <link-entity name="location" from="id" to="locationid" link-type="outer" alias="location">
            <all-attributes />
        </link-entity>
        <filter type="and">
             <condition attribute="gpequipmentid" operator="eq" value="${gpequipmentid}" />
        </filter>
    </entity>
</fetch>`;

    const results = await getData<Equipment>(body);

    if (results.length === 0) {
        console.log("\x1b[31m%s\x1b[0m", `No equipment found with the given GP Equipment ID (${gpequipmentid})`);
        return null;
    }
    if (results.length > 1) {
        console.log("\x1b[31m%s\x1b[0m", `Multiple equipment found with the given GP Equipment ID (${gpequipmentid})`);
        return null;
    }


    return results[0];
}
