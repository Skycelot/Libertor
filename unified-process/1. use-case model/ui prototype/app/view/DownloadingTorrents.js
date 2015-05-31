Ext.define("Libertor.view.DownloadingTorrents", {
    extend: "Ext.grid.Panel",
    alias: "widget.downloadingtorrents",
    title: "Downloading",
    store: "DownloadingTorrents",
    columns: [
        {
            header: "Order number",
            dataIndex: "number",
            flex: 1
        },
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
            header: "Progress",
            dataIndex: "progress",
            flex: 2
        },
        {
            header: "Speed",
            dataIndex: "speed",
            flex: 2
        },
        {
            header: "ETA",
            dataIndex: "eta",
            flex: 2
        },
        {
            header: "Added time",
            dataIndex: "additionDate",
            flex: 3
        }
    ],
    tbar: [
        {
            xtype: "button",
            icon: "resources/img/plus.png",
            tooltip: "Add torrent"
        }, {
            xtype: "button",
            icon: "resources/img/cross.png",
            tooltip: "Remove torrent"
        }, "-", {
            xtype: "button",
            icon: "resources/img/up.png",
            tooltip: "Decrease torrent's order number"
        }, {
            xtype: "button",
            icon: "resources/img/down.png",
            tooltip: "Increase torrent's order number"
        }, "-", "Simultanious downloads: ", {
            xtype: "numberfield",
            minValue: 0,
            value: 2,
            maxValue: 10,
            allowDecimals: false,
            width: 40,
            fieldStyle: "text-align:right"
        }, {
            xtype: "button",
            icon: "resources/img/check.png",
            tooltip: "Apply"
        }
    ]
});