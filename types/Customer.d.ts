type Customer = {
    createdby: `${string}:${string}:${string}`;
    createdon: string;
    customername: string;
    disablefieldinvoicing: "False" | "True";
    disablexoideeplinking: "False" | "True";
    gpcustomernumber: string;
    id: string;
    isinactive: "False" | "True";
    modifiedby: `${string}:${string}:${string}`;
    modifiedon: string;
    name: string;
    statecode: number;
    statuscode: number;
    versionnumber: number;
};
