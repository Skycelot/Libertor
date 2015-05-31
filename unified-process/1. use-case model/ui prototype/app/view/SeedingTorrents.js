Ext.define("Libertor.view.SeedingTorrents", {
    extend: "Ext.grid.Panel",
    alias: "widget.seedingtorrents",
    title: "Seeding",
    store: "SeedingTorrents",
    columns: [
        {
            header: "Name",
            dataIndex: "name",
            flex: 6
        },
        {
            header: "Size",
            dataIndex: "size",
            flex: 2
        },
        {
            header: "Downloaded size",
            dataIndex: "downloaded",
            flex: 2
        },
        {
            header: "Uploaded size",
            dataIndex: "uploaded",
            flex: 2
        },
        {
            header: "Uploading speed",
            dataIndex: "speed",
            flex: 2
        },
        {
            header: "Downloaded started date",
            dataIndex: "startDownloadingDate",
            flex: 3
        },
        {
            header: "Seeding started date",
            dataIndex: "startSeedingDate",
            flex: 3
        }
    ],
    tbar:[
        {
            xtype: "button",
            icon: "resources/img/chatplus.png",
            tooltip: "Download other torrent's files"
        },
        {
            xtype: "button",
            icon: "resources/img/cross.png",
            tooltip: "Remove torrent"
        }
    ]
});