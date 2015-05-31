Ext.define("Libertor.model.SeedingTorrent", {
    extend: "Ext.data.Model",
    idProperty: "id",
    fields: [
        {
            name: "id",
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
            name: "downloaded",
            type: "string"
        },
        {
            name: "uploaded",
            type: "string"
        },
        {
            name: "speed",
            type: "string"
        },
        {
            name: "startDownloadingDate",
            type: "string"
        },
        {
            name: "startSeedingDate",
            type: "string"
        },
    ]
});