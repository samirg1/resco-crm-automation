function nestLinkedEntities<T extends object = object>(entity: T) {
    const result: T = {} as T;

    for (const [key, value] of Object.entries(entity)) {
        if (!key.includes(".")) {
            // normal field
            result[key as keyof T] = value;
            continue;
        }

        const [alias, field] = key.split(".");

        if (!result[alias as keyof T]) {
            result[alias as keyof T] = {} as T[keyof T];
        }

        result[alias as keyof T][field as keyof T[keyof T]] = value;
    }

    return result;
}

export default nestLinkedEntities;
