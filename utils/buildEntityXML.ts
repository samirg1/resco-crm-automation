function escapeXml(value: string) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export function buildEntityXml({
    entityName,
    id,
    attributes,
}: {
    entityName: "equipment" | "appointment";
    id?: string;
    attributes: Record<string, any>;
}) {
    const action = id ? "Update" : "Create";
    const attrXml = Object.entries(attributes)
        .map(([key, value]) => {
            if (value == null) return "";
            return `<${key}>${escapeXml(value)}</${key}>\n\t`;
        })
        .join("");

    return `
<Entity xmlns="http://schemas.resco.net/XRM/Execute" EntityName="${entityName}" Action="${action}">
  ${id ? `<id>${id}</id>` : ""}
  ${attrXml}
</Entity>
`.trim();
}
