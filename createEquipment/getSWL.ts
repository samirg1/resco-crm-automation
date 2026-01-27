export function getSWL(description: string): number | string {
    const swlMap: { [key: string]: number } = {
        "bed": 250,
        "sling": 300,
        "hoist": 200,
        "track": 200
    };

    for (const [key, value] of Object.entries(swlMap)) {
        if (description.toLowerCase().includes(key)) {
            return value;
        }
    }

    return "";
}
