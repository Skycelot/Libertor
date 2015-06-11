Ext.define("Libertor.view.window.DownloadFromHistory", {
    extend: "Ext.window.Window",
    alias: "widget.downloadfromhistory",
    title: "Add torrent for downloading",
    modal: true,
    layout: "fit",
    items: [
        {
            xtype: "multifileparams"
        }
    ]
});