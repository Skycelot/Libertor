Ext.define("Libertor.controller.PrototypeRouter", {
    extend: "Ext.app.Controller",
    stores: [
        "DownloadingTorrents", "SeedingTorrents", "HistoryTorrents",
        "TorrentFiles", "LocalFileSystem"
    ],
    views: [
        "TorrentGroups", "DownloadingTorrents", "SeedingTorrents", "HistoryTorrents", "StatusBar",
        "window.AddTorrent", "window.DownloadMore", "window.DownloadFromHistory", "window.SeedFromHistory", "window.SpeedLimits",
        "component.SelectTorrentFile", "component.TorrentSingleFileParameters", "component.TorrentMultiFileParameters"
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
        }, {
            ref: "downloadMore",
            selector: "downloadmore"
        }, {
            ref: "downloadFromHistory",
            selector: "downloadfromhistory"
        }, {
            ref: "seedFromHistory",
            selector: "seedfromhistory"
        }, {
            ref: "localFolderSelector",
            selector: "localfolderselector"
        }, {
            ref: "speedLimits",
            selector: "speedlimits"
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
            },
            "seedingtorrents #downloadmore": {
                click: this.downloadMore
            },
            "downloadmore #confirm": {
                click: this.confirmDownloadMore
            },
            "historytorrents #download": {
                click: this.downloadFromHistory
            },
            "downloadfromhistory #confirm": {
                click: this.confirmDownloadFromHistory
            },
            "historytorrents #seed": {
                click: this.seedFromHistory
            },
            "seedfromhistory #confirm": {
                click: this.confirmSeedFromHistory
            },
            "localfolderselector button": {
                click: this.selectLocalFolder
            },
            "statusbar button": {
                focus: this.openSpeedLimits
            },
            "speedlimits #applylimits": {
                click: this.applySpeedLimits
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
                this.selectedTorrentGroup = groupId;
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
        //this.getAddTorrent().add(Ext.create("widget.multifileparams"));
    },
    confirmAddTorrent: function () {
        this.getAddTorrent().close();
    },
    downloadMore: function () {
        console.log("Download more button was clicked");
        Ext.create("widget.downloadmore").show();
    },
    confirmDownloadMore: function () {
        this.getDownloadMore().close();
    },
    downloadFromHistory: function () {
        console.log("Download button was clicked");
        Ext.create("widget.downloadfromhistory").show();
    },
    confirmDownloadFromHistory: function () {
        this.getDownloadFromHistory().close();
    },
    seedFromHistory: function () {
        console.log("Seed button was clicked");
        Ext.create("widget.seedfromhistory").show();
    },
    confirmSeedFromHistory: function () {
        this.getSeedFromHistory().close();
    },
    selectLocalFolder: function () {
        this.getLocalFolderSelector().close();
    },
    openSpeedLimits: function () {
        Ext.create("widget.speedlimits").show();
    },
    applySpeedLimits: function () {
        this.getSpeedLimits().close();
    }
});