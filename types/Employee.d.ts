type Employee = {
    createdby: `${string}:${string}:${string}`;
    createdon: string;
    departmentid: `department:${string}:${string}`;
    employeename: string;
    gpemployeeid: string;
    gptechnicianid: string;
    id: string;
    inactiveemployee: "False" | "True";
    inactivetechnician: "False" | "True";
    modifiedby: `${string}:${string}:${string}`;
    modifiedon: string;
    name: string;
    positionid: `position:${string}:${string}`;
    statecode: number;
    statuscode: number;
    versionnumber: number;
};
