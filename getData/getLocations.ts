import { getData } from "./index.ts";

export const getLocations = async ({
    searchText,
    locationid,
    searchField = "name",
    count = 500,
}: {
    searchText?: string;
    searchField?: "name" | "customername";
    locationid?: string;
    count?: number;
}): Promise<LocationData<true>[]> => {
    const body = `
<fetch distinct='1'  version="1.0" page="1" aggregate="false" count="${count}" resultformat="JSON">
    <entity name="location">
        <all-attributes />
        <link-entity name="customer" from="id" to="customerid" link-type="inner" alias="customer">
            <all-attributes />
            ${
                searchText && searchField === "customername"
                    ? `<filter type="and">
                <condition attribute="customername" operator="like" value="${searchText}" />
            </filter>`
                    : ""
            }
        </link-entity>${
            locationid
                ? `<filter type="and">
             <condition attribute="id" operator="eq" value="${locationid}" />
        </filter>`
                : ""
        }${
            searchText && searchField === "name"
                ? `<filter type="and">
             <condition attribute="name" operator="like" value="${searchText}" />
        </filter>`
                : ""
        }
    </entity>
</fetch>`;

    return await getData<LocationData<true>>(body);
};
