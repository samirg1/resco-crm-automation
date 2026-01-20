import PromptSync from "prompt-sync";

const prompt = PromptSync();

const equipmentTypes: {
    id: string;
    name: string;
    searchTexts?: string[];
}[] = [
    { id: "86b68ae0-cef5-49ec-bb90-ae4b515b6038", name: "TEST" },
    {
        id: "dc187b10-9631-437c-997a-7d5645424f3d",
        name: "AIR MATTRESS",
        searchTexts: ["mattress"],
    },
    {
        id: "c5469cb2-c71c-4b8b-9031-e176aef5b9c6",
        name: "AIR MATTRESS PUMP",
        searchTexts: ["pump"],
    },
    {
        id: "4c522e09-f3e2-4b75-b55b-3ad64fa7624a",
        name: "BATTERY PACK",
        searchTexts: ["battery"],
    },
    {
        id: "86039142-56f2-49c6-83c6-f0ed2979b196",
        name: "BED ELECTRIC",
        searchTexts: ["bed"],
    },
    {
        id: "e7e6578d-8694-4e10-835c-003b109fadde",
        name: "CEILING HOIST",
        searchTexts: ["ceiling"],
    },
    {
        id: "1506183a-f278-4afe-923a-fb5e83729793",
        name: "CEILING HOIST TRACK",
        searchTexts: ["track"],
    },
    {
        id: "16866a81-54c3-4e5c-917a-fb2a22ea22f0",
        name: "CHANGE TABLE",
        searchTexts: ["table", "bath trolley"],
    },
    {
        id: "39a57b5c-40c0-49a2-9404-02f3320afbcf",
        name: "LIFTER",
        searchTexts: ["floor"],
    },

    {
        id: "27efedc6-67d6-429f-99ed-abc67ffd2f40",
        name: "OVER BED TABLE",
        searchTexts: [
            "table",
            "2 tier trolley",
            "UTILITY TROLLEY",
            "overbed",
            "2 tier",
        ],
    },

    {
        id: "631b787d-ba93-4f56-bcd5-3ba2e1db9493",
        name: "SHOWER COMMODE",
        searchTexts: ["commode"],
    },

    {
        id: "e5641812-fafb-4115-b7f5-bb9b135e9ea8",
        name: "SLING",
        searchTexts: ["sling"],
    },
    {
        id: "44e88aa6-7dbf-46f9-890a-da4f7ac988ec",
        name: "STANDING FRAME",
        searchTexts: ["walker"],
    },

    {
        id: "3a537bc1-55a2-4c74-a347-12fca24df975",
        name: "WALL CHARGER",
        searchTexts: ["charger"],
    },
    {
        id: "0f490dcd-e114-4ff0-b5f7-494d41f7798c",
        name: "WEIGH CHAIR",
        searchTexts: ["chair"],
    },
    {
        id: "a9da18ae-aba4-47ab-9862-fbd70999f2db",
        name: "WEIGH SCALE",
        searchTexts: ["scale"],
    },
];

export function getEquipmentTypeLineByName(name: string): string {
    const equipmentType = equipmentTypes.find(
        (et) => {
            if (et.searchTexts === undefined) return false;
            for (const text of et.searchTexts) {
                if (name.toLowerCase().includes(text.toLowerCase())) {
                    return true;
                }
            }
            return false;
        }
    );
    let equipmentTypeFinal = equipmentType ?? equipmentTypes[0];

    if (!equipmentType) {
        while (true) {
            console.log(
                `\x1b[31m%s\x1b[0m`,
                `Equipment Type not found for name: ${name}`
            );
            console.log("Available Equipment Types:");
            equipmentTypes.forEach((et) => {
                console.log(`- ${et.name}`);
            });
            const userInput = prompt(
                "Please enter the Equipment Type name from the above list: "
            );
            const selectedEquipmentType = equipmentTypes.find(
                (et) => et.name.toLowerCase() === userInput.toLowerCase()
            );

            if (selectedEquipmentType) {
                equipmentTypeFinal = selectedEquipmentType;
                break;
            } else {
                console.log(
                    `\x1b[31m%s\x1b[0m`,
                    `Invalid Equipment Type name entered: ${userInput}`
                );
            }
        }
    }
    return `equipmenttype:${equipmentTypeFinal.id}:${equipmentTypeFinal.name}`;
}
