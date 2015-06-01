Ext.define("Libertor.controller.PrototypeRouter", {
    extend: "Ext.app.Controller",
    stores: [
        "DownloadingTorrents", "SeedingTorrents", "HistoryTorrents"
    ],
    views: [
        "TorrentGroups", "DownloadingTorrents", "SeedingTorrents", "HistoryTorrents", "StatusBar",
        "AddTorrent", "SelectTorrentFile", "TorrentSingleFileParameters", "TorrentMultiFileParameters"
    ],
    refs: [
        {
            ref: "listArea",
            selector: "viewport > #listarea"
        }, {
            ref: "torrentGroups",
            selector: "viewport > torrentgroups"
        }, {
            ref: "addTorrent",
            selector: "addtorrent"
        }
    ],
    selectedTorrentGroup: "d",
    init: function () {
        this.control({
            "torrentgroups": {
                itemclick: this.selectTorrentGroup,
                afterrender: this.defaultView
            },
            "downloadingtorrents #add": {
                click: this.addTorrent
            },
            "addtorrent #torrentparams": {
                click: this.setTorrentParams
            },
            "addtorrent #confirm": {
                click: this.confirmAddTorrent
            }
        });
        console.log("PrototypeRouter has been initialized.");
    },
    setCentralView: function (alias) {
        this.getListArea().removeAll();
        this.getListArea().add(Ext.create(alias));
    },
    defaultView: function () {
        this.setCentralView("widget.downloadingtorrents");
        this.selectedTorrentGroup = 1;
        this.getTorrentGroups().getSelectionModel().select(this.getTorrentGroups().getStore().getNodeById("d"));
        console.log("DefaultView is through.");
    },
    selectTorrentGroup: function (container, record) {
        var groupId = record.data.id;
        console.log("Tree item {" + groupId + "} selected");
        if (!(this.selectedTorrentGroup === groupId)) {
            var actualIndex = true;
            switch (groupId) {
                case "d":
                    this.setCentralView("widget.downloadingtorrents");
                    break;
                case "s":
                    this.setCentralView("widget.seedingtorrents");
                    break;
                case "h":
                    this.setCentralView("widget.historytorrents");
                    break;
                default:
                    actualIndex = false;
            }
            if (actualIndex) {
                this.selectedTorrentGroup = groupId;    items: [
        {
            xtype: "button",
            title: "OK",
            itemId: "confirm"
        }
    ]

            }
        }
    },
    addTorrent: function () {
        console.log("Add button was clicked");
        Ext.create("widget.addtorrent").show();
    },
    setTorrentParams: function () {
        this.getAddTorrent().removeAll();
        this.getAddTorrent().add(Ext.create("widget.singlefileparams"));
    },
    confirmAddTorrent: function () {
        this.getAddTorrent().close();
    }
});