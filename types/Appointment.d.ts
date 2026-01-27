
type Appointment = {
    appointmentstatusid: `appointmentstatus:${string}:${string}`;
    createdby: `${string}:${string}:${string}`;
    createdon: string;
    description: string;
    employeeid: `employee:${string}:${string}`;
    estimatehours: number;
    gpappointmentid: number;
    gpappointmenttype: number;
    gpservicecallid: string;
    gptechnicianid: string;
    id: string;
    isinternal: "False" | "True";
    isjsareportrequested: "False" | "True";
    islocal: "False" | "True";
    latitude: number;
    locationid: `location:${string}:${string}`;
    longitude: number;
    modifiedby: `${string}:${string}:${string}`;
    modifiedon: string;
    name: string;
    ownerid: `${string}:${string}:${string}`;
    resco_islocal: "False" | "True";
    scheduledend: string;
    scheduledstart: string;
    servicecallid: `servicecall:${string}:${string}`;
    startdate: string;
    statecode: number;
    statuscode: number;
    subject: string;
    versionnumber: number;
    employee: Employee;
    appointmentstatus: AppointmentStatus;
    location: LocationData;
    customer: Customer,
    call: Call;
    technicianactivity: TechnicianActivity;
};
