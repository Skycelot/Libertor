Ext.define("Libertor.model.TorrentFile", {
    extend: "Ext.data.Model",
    idProperty: "id",
    fields: [
        {
            name: "id",
            type: "int"
        },
        {
            name: "text",
            type: "string"
        },
        {
            name: "checked",
            type: "boolean"
        },
        {
            name: "priority",
            type: "string"
        }
    ]
});