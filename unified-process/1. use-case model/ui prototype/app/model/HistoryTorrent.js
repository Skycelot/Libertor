Ext.define("Libertor.model.HistoryTorrent", {
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
            name: "startDownloadingDate",
            type: "string"
        },
        {
            name: "startSeedingDate",
            type: "string"
        },
        {
            name: "removedDate",
            type: "string"
        },
        {
            name: "reason",
            type: "string"
        },
        {
            name: "downloaded",
            type: "string"
        },
        {
            name: "seeded",
            type: "string"
        },
    ]
});