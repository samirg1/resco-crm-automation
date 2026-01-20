import { getData } from "./index.ts";

export const getAppointments = async (
    gptechnicianid: string,
    count: number = 500,
): Promise<Appointment[]> => {
    const body = `
<fetch distinct='0' page='1' count='${count}'  version="1.0" aggregate="false" resultformat="DynamicEntities">
    <entity name="appointment">
        <all-attributes />
        <link-entity name="appointmentstatus" from="id" to="appointmentstatusid" link-type="inner" alias="appointmentstatus">
            <all-attributes />
            <filter type="and">
                <condition attribute="name" operator="not-in">
                    <value>COMPLETE</value>
                    <value>RE-ASSIGN</value>
                </condition>
            </filter>
        </link-entity>
        <link-entity name="employee" from="id" to="employeeid" link-type="outer" alias="employee">
            <all-attributes />
        </link-entity>
        <link-entity name="location" from="id" to="locationid" link-type="outer" alias="location">
            <all-attributes />
        </link-entity>
        <link-entity name="servicecall" from="id" to="servicecallid" link-type="outer" alias="call">
            <all-attributes />
        </link-entity>
        <link-entity name="technicianactivity" from="id" to="technicianactivityid" link-type="outer" alias="technicianactivity">
            <all-attributes />
        </link-entity>
        <filter type="and">
            <condition attribute="gptechnicianid" operator="in">
                <value>${gptechnicianid}</value>
            </condition>
        </filter>
    </entity>
</fetch>`;

    return await getData<Appointment>(body);
};
