import { getData } from "./index.ts";

export const getTasks = async (count: number = 500): Promise<object[]> => {
    const body = `
<fetch distinct='1'  version="1.0" page="1" aggregate="false" count="${count}" resultformat="JSON">
    <entity name="task">
        <all-attributes />
        <!--<filter type="and">
             <condition attribute="gptasklistid" operator="eq" value="PM-BED" />
        </filter>-->
        <filter type="and">
             <condition attribute="gpservicecallid" operator="eq" value="260119-0168" />
        </filter>
    </entity>
</fetch>`;

    return await getData(body);
};
