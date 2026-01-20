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
