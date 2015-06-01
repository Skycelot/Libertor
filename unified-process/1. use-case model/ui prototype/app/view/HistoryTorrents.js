Ext.define("Libertor.view.HistoryTorrents", {
    extend: "Ext.grid.Panel",
    alias: "widget.historytorrents",
    title: "History",
    store: "HistoryTorrents",
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
            header: "Downloading started date",
            dataIndex: "startDownloadingDate",
            flex: 3
        },
        {
            header: "Seeding started date",
            dataIndex: "startSeedingDate",
            flex: 3
        },
        {
            header: "Removal date",
            dataIndex: "removedDate",
            flex: 3
        },
        {
            header: "Removal reason",
            dataIndex: "reason",
            flex: 2
        },
        {
            header: "Downloaded size",
            dataIndex: "downloaded",
            flex: 2
        },
        {
            header: "Uploaded size",
            dataIndex: "seeded",
            flex: 2
        }
    ],
    tbar: [
        {
            xtype: "button",
            icon: "resources/img/login.png",
            tooltip: "Start downloading torrent"
        },
        {
            xtype: "button",
            icon: "resources/img/logout.png",
            tooltip: "Start seeding torrent"
        }
    ]
});