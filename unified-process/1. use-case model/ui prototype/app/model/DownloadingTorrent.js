Ext.define("Libertor.model.DownloadingTorrent", {
    extend: "Ext.data.Model",
    idProperty: "id",
    fields: [
        {
            name: "id",
            type: "int"
        },
        {
            name: "number",
            type: "int"
        },
        {
            name: "name",
            type: "string"
        },
        {
            name: "size",
            type: "string"
        },
        {
            name: "progress",
            type: "string"
        },
        {
            name: "speed",
            type: "string"
        },
        {
            name: "eta",
            type: "string"
        },
        {
            name: "additionDate",
            type: "string"
        }
    ]
});