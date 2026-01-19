const manufacturers = [
    {
        id: "4c801448-ca76-4273-ba96-8a455533bb2b",
        name: "UNKNOWN",
    },
    {
        id: "ac63c3b7-fedd-4ea3-beb9-e46dfb660414",
        name: "4HEALTHCARE",
    },
    {
        id: "4382f8db-ebfb-424f-9a18-d67abd16030c",
        name: "A & D AUST",
    },
    {
        id: "268e9048-1d81-4df8-99e5-f1d448034e12",
        name: "ABBOTT LAB",
    },
    {
        id: "99889b65-1648-419c-82b5-753918db4717",
        name: "ACCOSON",
    },
    {
        id: "92c9d8d1-f317-47d2-8d06-3fe32dfe9c33",
        name: "ACTIVE CARE",
    },
    {
        id: "408f28ee-a984-4516-bbfe-a604972b8673",
        name: "ADVANCED LIFECA",
    },
    {
        id: "4b11cf32-8cd8-48ae-8af8-2fcc1dc407dd",
        name: "AIDACARE",
    },
    {
        id: "e34ab76e-86e1-4c30-85e6-f4593fa6e5b5",
        name: "AIDCARE",
    },
    {
        id: "1865dcde-415d-4761-bf2d-9a79ab02fc88",
        name: "AIR COMFORT",
    },
    {
        id: "0bbd62c4-cb9a-4d0a-bb85-dbfa523ab4f6",
        name: "AIR LO",
    },
    {
        id: "df7173d0-5143-4e90-9195-4e71cdf33383",
        name: "AIRSEP",
    },
    {
        id: "1d0cbe4f-d0a7-4279-be51-af0dd0409b79",
        name: "ALL DAY",
    },
    {
        id: "42902e06-0d69-43b3-86e8-08b4807fdd1c",
        name: "ALLEGRO",
    },
    {
        id: "88807015-7b7a-48ba-92fc-ffea793eb7f5",
        name: "ALPHA",
    },
    {
        id: "45f22ba8-87a1-48dc-8c11-d80c7812a22e",
        name: "ALRICK",
    },
    {
        id: "06343b8e-9a88-4ba4-b3b8-9e80b50ebc88",
        name: "AQUARIUS",
    },
    {
        id: "410a30d4-d8cb-43fa-92ad-19a9a2d1c422",
        name: "AQUATEC",
    },
    {
        id: "f83eb2a4-e8d3-496d-9595-ca9543236b54",
        name: "ARJO",
    },
    {
        id: "74858201-1730-4037-ac42-38d465105caa",
        name: "ARJO HUNTLEIGH",
    },
    {
        id: "e1b18c3b-2b4a-443d-99fd-6540c19d18b4",
        name: "ASPIRE",
    },
    {
        id: "c65a8854-a0f0-4b03-a12b-bf5c751544f9",
        name: "ASTOR",
    },
    {
        id: "07975cca-abec-4d10-8e0f-28f4b5b10b2e",
        name: "ATHERTON",
    },
    {
        id: "9af9ecc5-952b-48c8-908e-49bb5ae06042",
        name: "AUSCARE",
    },
    {
        id: "5ee2d3d3-d32d-4d42-97a9-ab735a2299da",
        name: "AUSHEALTHEQUIP",
    },
    {
        id: "54239783-8f61-416e-a087-8e7c44f49146",
        name: "AXIS HEALTH",
    },
    {
        id: "9f16810e-c01c-4859-b3a6-aa668cf8416f",
        name: "BARIATRIC",
    },
    {
        id: "0217069e-9c6d-4ac1-bc95-fe0c3b2fb0ee",
        name: "BASIC AMERICAN",
    },
    {
        id: "e399135d-933e-48e1-95c2-5019bc59260c",
        name: "BERRCOM",
    },
    {
        id: "a39ec37d-74b7-441d-b287-06484d07abe8",
        name: "BETTER LIVING",
    },
    {
        id: "abf922d7-be89-4494-abb6-a3d9b5530edc",
        name: "BIDWELL",
    },
    {
        id: "812c57bd-af1d-49dd-804c-2734f47cd5b3",
        name: "BMH",
    },
    {
        id: "84a7d708-0b77-4bfc-9516-e1b8e723baa6",
        name: "BPR MEDICAL",
    },
    {
        id: "bf55022f-de16-4abc-ab21-cb9a2b12b760",
        name: "BRAUN",
    },
    {
        id: "cc68745c-6c41-4461-8993-20b7a6bbbc74",
        name: "BREWER",
    },
    {
        id: "d9234ae8-31e2-4203-b11a-5bc67828fca2",
        name: "BRODA",
    },
    {
        id: "1a7c4de5-715d-482c-985f-9866b117efee",
        name: "BURMEIR",
    },
    {
        id: "116360a8-24df-4c0d-831f-86f9ef685c15",
        name: "CAMBRO",
    },
    {
        id: "73437f21-a2f7-4a3c-91bf-f3e2b2c3605e",
        name: "CAPSA",
    },
    {
        id: "e430de15-6d54-4838-a3e9-1c0707aaf1b2",
        name: "CAPSA SOLUTION",
    },
    {
        id: "1dd633e9-c26d-482a-a966-b2b1fd1a0bae",
        name: "CARE OF SWEDEN",
    },
    {
        id: "6e9deeb8-0d82-417f-8bdc-6e6deeaec062",
        name: "CARE PLUS",
    },
    {
        id: "0586a36c-ad9d-4624-88ec-c5a732aca38d",
        name: "CAREMED",
    },
    {
        id: "31c582f2-c926-4e42-8c10-7d813e81dee8",
        name: "CAREQUIP",
    },
    {
        id: "e3d3d9a0-8734-490f-86d0-2e31ab41d169",
        name: "CARETEK",
    },
    {
        id: "bb351512-5cca-47e4-9f94-d8540608cfed",
        name: "CAREVO",
    },
    {
        id: "2dbe3215-21ce-42d7-a9b9-c1eb80e8e57f",
        name: "CAREWELL",
    },
    {
        id: "bba9a2ab-5111-42e4-95c6-8b2f9f85df15",
        name: "CARILEX",
    },
    {
        id: "0008dcf5-c4fc-4158-ad7c-fc134b724c89",
        name: "CARLISE",
    },
    {
        id: "a3b48658-f590-4d35-b222-3dd78369884b",
        name: "CHARDER MEDICAL",
    },
    {
        id: "dfb9a9df-b043-43eb-947d-5c65a81b1679",
        name: "CIGWELD",
    },
    {
        id: "5b50b85a-3a6f-42b7-90b6-0521935e389a",
        name: "CLEMENT CLARKE",
    },
    {
        id: "cef72097-8262-4a42-805e-32ac7ecd4ae0",
        name: "CME",
    },
    {
        id: "26c30f50-0681-4c5c-a344-578d008b396d",
        name: "COBALT",
    },
    {
        id: "dfabefa9-9ed2-4b8d-a8f1-84773ca4e0d0",
        name: "COINFYCARE",
    },
    {
        id: "af835c22-e997-4027-990d-c25798999336",
        name: "COMWELD GROUP",
    },
    {
        id: "ca47522c-1b6d-4de5-aab0-24dd9274cf6e",
        name: "CONCENS",
    },
    {
        id: "ee335f3e-f8fc-44a7-8988-22acaa615e76",
        name: "CONSENS",
    },
    {
        id: "6a5ae758-8baf-4300-8688-42817a3f99ac",
        name: "CRESCENT",
    },
    {
        id: "e3fca55f-af6b-48ad-b020-77f2d1e1a133",
        name: "DAYCOM",
    },
    {
        id: "4ee3d525-a023-4e40-a260-e65a63af3d63",
        name: "DAYS",
    },
    {
        id: "ab203ec0-c187-418c-82e0-1375b1044717",
        name: "DDC",
    },
    {
        id: "5e29ce6b-2c75-4b76-a502-269f367e4fbd",
        name: "DDC DOLPHIN",
    },
    {
        id: "5cd7389e-ba3b-47d8-8c23-0658d7b27925",
        name: "DEMO",
    },
    {
        id: "2d304fc3-75af-473e-a3e8-45cfacff3977",
        name: "DEUTSCHER",
    },
    {
        id: "33e0ca2c-aa0e-4f22-a6d5-e685d7356f76",
        name: "DUPONT MEDICAL",
    },
    {
        id: "2a587cbb-6a2f-4824-ad4a-bebc0257f42f",
        name: "EASY AIR",
    },
    {
        id: "b705cf2d-5c4d-44f3-8c3c-cffb6ba1ebfa",
        name: "EASYSTAND",
    },
    {
        id: "feabc6f6-67b7-43cf-b113-2689f93b5f94",
        name: "EBOS GROUP",
    },
    {
        id: "69a727b5-89b7-4e74-89b7-46c76eab7d6e",
        name: "ENGRIT",
    },
    {
        id: "0f85a75c-4a6f-4192-8cf9-d37a0d15f100",
        name: "ETAC",
    },
    {
        id: "6d2ebd0a-a08a-4dfc-9fd3-e0961c494d3c",
        name: "ETL",
    },
    {
        id: "c601dc7f-b21c-4eff-81d9-5cb31bd79397",
        name: "FLAT TOP",
    },
    {
        id: "d24dd554-6f3e-49b3-88a5-e1136dea0a04",
        name: "FORTE HEALTHCAR",
    },
    {
        id: "753057ec-5259-42ea-b322-579bde2def0e",
        name: "FREEDOM",
    },
    {
        id: "e74c3a3c-0db6-44b6-9084-db40c33a44ff",
        name: "FREEWAY",
    },
    {
        id: "3f14449a-3abc-43c6-a05b-b20e2f9ea042",
        name: "GENERIC",
    },
    {
        id: "ba08ac36-ec2d-4e8a-a131-c9a1c77c9902",
        name: "GF HEALTH",
    },
    {
        id: "210e4fc1-e084-41fc-b8ad-0c3ccc0578ab",
        name: "GOLVO",
    },
    {
        id: "0ceb66a5-5a0f-41c8-bfbc-1a6d827a6f1e",
        name: "GULDMANN",
    },
    {
        id: "7af942f6-c900-4647-9ce2-b84e7e8dd567",
        name: "GULDNANN",
    },
    {
        id: "5416f280-a280-4ec7-9018-58374dbc21cf",
        name: "HANDICARE",
    },
    {
        id: "e013d7d8-d6ec-4513-95f4-93e30d35ee73",
        name: "HAYCOMP",
    },
    {
        id: "99302f8a-3d60-40df-8d6c-b08294bbe1b1",
        name: "HEALTHFURN",
    },
    {
        id: "a179b5e8-ebea-43ff-b6aa-99b0a3a7c89e",
        name: "HEINE",
    },
    {
        id: "f0b0d21a-67d7-4746-ae26-e12a333cb756",
        name: "HENDICARE",
    },
    {
        id: "c231a595-ef9b-47d6-9aef-964a240d1806",
        name: "HENRY CARE",
    },
    {
        id: "f5cb63d5-265e-4f19-b9e3-4363944a860a",
        name: "HETAIDA",
    },
    {
        id: "4c07ae83-d8ab-428c-98f7-a9220c2aefc8",
        name: "HIGHGATE",
    },
    {
        id: "d5095753-04a6-420a-b569-fa52a7ee4a90",
        name: "HILL-ROM",
    },
    {
        id: "2c0ae7c5-ace5-4a46-b834-900ec63a9155",
        name: "HOSP EQUIP",
    },
    {
        id: "89925844-8d38-4a41-8e37-78d4227a6b9c",
        name: "HUNTLEIGH",
    },
    {
        id: "555bd96b-c37f-4d82-b41b-7b3b32ed518c",
        name: "I-CARE",
    },
    {
        id: "bbcc83ea-39f1-4bf8-81b4-c72823679261",
        name: "INVACARE",
    },
    {
        id: "110cfc3f-78c5-4623-be65-9b2f3afcebab",
        name: "JACKSON SHANDS",
    },
    {
        id: "86fac0b1-7701-4d7d-8810-664bd97c49ad",
        name: "JB MEDICAL",
    },
    {
        id: "ef3ede16-abcc-4fd1-8bd2-85a18564ae97",
        name: "JOMOR",
    },
    {
        id: "69f9cd3d-2cc4-4c03-a114-355672f358b1",
        name: "JOYCE",
    },
    {
        id: "67880513-23da-4373-a6b6-3783d0fbf7a3",
        name: "JUVO",
    },
    {
        id: "765d37b4-ed5b-49c6-9996-65f2232e3f56",
        name: "KARMA",
    },
    {
        id: "d720331e-7c30-4f6c-810e-ffd06ababe4c",
        name: "KCARE",
    },
    {
        id: "f92c624d-62ce-4577-9264-5efe267e4fda",
        name: "K-CARE",
    },
    {
        id: "a4630046-dfd6-4766-b1b4-747909bcc348",
        name: "KELBA",
    },
    {
        id: "6ef3d5df-90cd-49db-9cb1-175de76c5b84",
        name: "KERRY",
    },
    {
        id: "1dceca27-199f-43c3-b2bb-6859a7ca6666",
        name: "KI MOBLITY",
    },
    {
        id: "94771783-c46b-4d70-87a2-eb19d9b48aee",
        name: "LIFTCARE",
    },
    {
        id: "40c357ae-aec6-448d-8a2b-1acde6aa4fe8",
        name: "LIKO",
    },
    {
        id: "1492bb32-cca4-4f72-956f-9a5e4ef5e3a2",
        name: "LINAK",
    },
    {
        id: "5dc645eb-628b-432c-ac9d-cc68df630e8b",
        name: "LINDS",
    },
    {
        id: "6b6c77be-9ce4-4fe5-b355-e22d0bd599bf",
        name: "LITEGATE",
    },
    {
        id: "9b9cd132-3fea-47f1-87d6-9d8308465526",
        name: "LR INSTRUMENTS",
    },
    {
        id: "169fb146-6d7f-4ad0-aa7a-834d9c317e0c",
        name: "LSS393190",
    },
    {
        id: "18d2f7b7-1925-4870-87c1-ff74047e2941",
        name: "MAC'S",
    },
    {
        id: "a216c62a-178d-4592-bf56-8ac8e3c37fb8",
        name: "MAGNETIC",
    },
    {
        id: "08a7c621-fec3-44de-a381-991873e7ae3b",
        name: "MALMET",
    },
    {
        id: "43a0db79-c60a-4431-94eb-d68c243f939e",
        name: "MALSCH",
    },
    {
        id: "00f5ce6a-e34a-4655-a9ca-4671ca42d389",
        name: "MAXI CARE",
    },
    {
        id: "ac0d34e9-2153-4db8-aaf6-20c79f535db1",
        name: "MEDESCAN",
    },
    {
        id: "ef8495d0-426a-4013-bd78-4dbde4de733b",
        name: "MEDICRAFT",
    },
    {
        id: "bc36d001-3165-43eb-a3ba-9e74a9c82e42",
        name: "MEIKO",
    },
    {
        id: "c34194a5-799f-43be-ad44-ffb91f1e732b",
        name: "MERCURY ADVANCE",
    },
    {
        id: "6f3454c2-f23e-47e8-ae2d-18262b2f7572",
        name: "MY COMFORT",
    },
    {
        id: "2f292ef3-b8b7-49dc-b530-665cb7004879",
        name: "NDV",
    },
    {
        id: "9adc11b8-3fcb-45d1-af88-5f500be79b52",
        name: "NINJO",
    },
    {
        id: "89141e2e-7273-4c2a-b4af-8ecc6cf41f67",
        name: "NOVA",
    },
    {
        id: "c8044080-8db2-4935-8953-b00d1acb256c",
        name: "NOVIS",
    },
    {
        id: "0b22fdd5-f57e-43df-9a5d-f6bd040359b5",
        name: "OMRON HEALTHCAR",
    },
    {
        id: "f2b0a5b7-b63f-40f0-a3d9-171acfa6713c",
        name: "OSKA",
    },
    {
        id: "3a531e9f-3381-47de-8003-f159dda2a691",
        name: "OTHER",
    },
    {
        id: "4b3a6a3f-dda7-4d5f-b6d8-e60db011e63c",
        name: "OTTOBOCK",
    },
    {
        id: "b96d4a17-2766-4f6a-a22e-df5f8392b0e2",
        name: "OXFORD",
    },
    {
        id: "3ea7f0c5-eccb-4e19-968f-90983b4e3d5d",
        name: "OXFORD EME",
    },
    {
        id: "9f3903c9-694e-4280-b9f9-fdddbcdae938",
        name: "PARAGON CARE",
    },
    {
        id: "36e61bd0-4670-4270-b6f0-f5572afaf125",
        name: "PARMED",
    },
    {
        id: "dd9feb20-86de-43cb-a534-0a2a5d0f04e6",
        name: "PATIENT SUPPORT",
    },
    {
        id: "201d1882-38c5-4c2d-837b-4068b28cec6b",
        name: "PATTERSON MEDIC",
    },
    {
        id: "14053ae9-242a-4af6-80ca-a6dd9537bdbf",
        name: "PEAK CARE",
    },
    {
        id: "34d79d87-6596-49c8-bf0a-3ec82a8e172f",
        name: "PELICAN",
    },
    {
        id: "af893111-da8f-4d7b-a85c-e08fae5bc3f7",
        name: "PHILIPS RESP",
    },
    {
        id: "29750bf0-6839-434b-b31f-bfe6d69815b6",
        name: "POLYMEDIC",
    },
    {
        id: "2ecd3606-cf1e-4617-9017-9a734ca0d56e",
        name: "PR CHINA",
    },
    {
        id: "b6037ddb-e4be-402e-b500-0ce8b953c6f5",
        name: "PREMIUM LIFT",
    },
    {
        id: "a40a54fb-c80f-4b13-9f1a-4c7503eda0dd",
        name: "PRESTIGE",
    },
    {
        id: "7a9195e5-7c5e-4e8e-aa47-71373e406c5c",
        name: "PRIDE MOBILITY",
    },
    {
        id: "23266d2b-1fde-4019-9b20-3c3723f7bbea",
        name: "PRISM",
    },
    {
        id: "47252e08-0b9b-41c3-8c64-adf632403dcf",
        name: "PRO-MED",
    },
    {
        id: "1df785aa-9033-42fa-83d4-77e4edfd53f0",
        name: "PROSLING",
    },
    {
        id: "3568d416-ddc9-48a1-8cc0-434d4dbcd49c",
        name: "PSM",
    },
    {
        id: "9946a9d9-a106-40ef-ab43-19479dd2dfd8",
        name: "QUANTUM",
    },
    {
        id: "3a24db5a-aa52-4b9f-8843-2cac90156fe3",
        name: "QUICKIE",
    },
    {
        id: "3a33ca67-08ca-4c64-bc35-d13a40b7f085",
        name: "RAPINI",
    },
    {
        id: "bda40b8d-1bb9-4b50-8610-b8a52e22f79d",
        name: "RESPIRONICS",
    },
    {
        id: "9a7e3f27-76c6-48cb-b36a-91d898e25bc7",
        name: "RHIMA",
    },
    {
        id: "1cc224bf-bcf7-4a7e-8b46-33d03b0a2172",
        name: "RICHARD THOMSON",
    },
    {
        id: "f14be8f5-5336-4ddf-a5bc-4ff68547cb5b",
        name: "ROMEDIC",
    },
    {
        id: "9f30a710-0dde-46eb-9418-e9db512009a1",
        name: "RUDPLAS",
    },
    {
        id: "719a43fc-53ea-442e-bc80-22831ae4b790",
        name: "RYCOM",
    },
    {
        id: "0a70672c-8914-4ca8-910a-0393ea1fda0b",
        name: "SAFETY&MOBILITY",
    },
    {
        id: "00b103df-7586-41f1-a613-6102933ebdc9",
        name: "SEATINGMATTERS",
    },
    {
        id: "55162fa9-36a3-4ee8-8a45-ec487ee06293",
        name: "SECA",
    },
    {
        id: "8a80c7bc-939f-4d48-88c9-5a4355081045",
        name: "SHEKEL",
    },
    {
        id: "9851bb6c-5e99-43e0-aa8d-b91c227be5dd",
        name: "SHENZHEN BSX",
    },
    {
        id: "a42f2e80-4dd4-44fb-a390-5daec9793695",
        name: "SIGMA CARE",
    },
    {
        id: "2d5d8dd5-1e1f-494c-a3e6-9ed3d8630a36",
        name: "SILVALEA",
    },
    {
        id: "6e7c1c08-89af-4773-932c-47a2e3103aed",
        name: "SILVER BULLET",
    },
    {
        id: "632f9d59-75f5-498e-b173-c4beeda3acff",
        name: "SOLARI",
    },
    {
        id: "510496a5-7e8f-40fc-b296-6b13f0e716f0",
        name: "SOVAMOTION",
    },
    {
        id: "e78e2d43-bfe8-4da8-bc77-b6dfbafbab9d",
        name: "SR SMITH",
    },
    {
        id: "a02d2c5e-96fa-4a8d-b9c7-aaa538b6fd56",
        name: "STIEGELMEYER",
    },
    {
        id: "f516eddc-fa56-442e-9580-0cadf658280f",
        name: "SUNRISE MEDICAL",
    },
    {
        id: "3937a871-e7d4-4dc7-bfbb-b23c8e1148c3",
        name: "TANAKA SANGYO",
    },
    {
        id: "775a0a6b-710f-4123-b304-841a20eeb024",
        name: "TECH ASSIST",
    },
    {
        id: "b5edc349-c92e-4847-ad0e-e1922df010d2",
        name: "THE PEAK CARE",
    },
    {
        id: "f8048227-eb37-4493-bbcb-a65127173003",
        name: "TR EQUIPMENT",
    },
    {
        id: "4a2b700e-76b7-4b5d-9316-165a68a519f8",
        name: "TRIBUTE",
    },
    {
        id: "3e4339f5-70ca-4095-b5aa-34df35afe824",
        name: "UMANO MEDICAL",
    },

    {
        id: "bec4828a-9aca-4a2b-9f25-b349fab47805",
        name: "VERNACARE",
    },
    {
        id: "35428f98-96e1-4d20-bfac-da88466a258e",
        name: "VIKING M HOIST",
    },
    {
        id: "1f83c530-531b-4eca-ac31-e86bb31e239e",
        name: "WALMSLEY",
    },
    {
        id: "ec504e04-233e-4dad-8035-f6492748c907",
        name: "WATERCOMFORT",
    },
    {
        id: "b064b3ea-a675-4fcf-a5a5-8037c4fb06f6",
        name: "WEDDERBURN",
    },
    {
        id: "64bda00a-e239-46c3-b7c7-b0d65396a259",
        name: "WELCH ALLYN",
    },
    {
        id: "142ba683-98c9-4c10-a678-cf20020dac79",
        name: "WELLSWEIGH",
    },
    {
        id: "a77f1766-d03a-493e-b703-fbd5d922f26e",
        name: "WINTUR H/C",
    },
    {
        id: "f8f8dcdf-ac84-41ef-941e-d4fa409cc1a8",
        name: "WISSNER-BOSSERH",
    },
    {
        id: "5ef6d325-a8f7-4578-bb76-51c0fe792f26",
        name: "XIAMEN",
    },
];

export function getManufacturerLine(manufacturerName: string): string {
    const manufacturer = manufacturers.find(m => m.name === manufacturerName) ?? manufacturers[0];
    return `manufacturer:${manufacturer.id}:${manufacturer.name}`;
}
