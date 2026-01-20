type Equipment = {
    barcode: number | string;
    componentquantity: number;
    createdby: `${string}:${string}:${string}`;
    createdon: string;
    equipmentdescription2: string;
    equipmenttypeid: `equipmenttype:${string}:${string}`;
    gpcustomernumber: string;
    gpequipmentid: string;
    gplocationnumber: string;
    gpsublocationid: string;
    gpuserdefine1a: number; // customer barcode
    gpuserdefine2a: string; // condition
    gpuserdefine4a: number; // swl
    gpuserdefine9a: string; // manufacturer date
    id: string;
    iscomponent: "False" | "True";
    isgroupitem: "False" | "True";
    isprocessed: "False" | "True";
    latitude: number;
    locationid: `location:${string}:${string}`;
    longitude: number;
    manufacturerid: `manufacturer:${string}:${string}`;
    modelnumber: string;
    modifiedby: `${string}:${string}:${string}`;
    modifiedon: string;
    name: string;
    refrigerantequipmenttypeid: `refrigerantequipmenttype:${string}:${string}`;
    serialnumber: number;
    statecode: number;
    statuscode: number;
    versionnumber: number;
    equipmenttype: EquipmentType;
    manufacturer: Manufacturer;
    location: LocationData;
};
