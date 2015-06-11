Ext.define("Libertor.view.window.DownloadMore", {
    extend: "Ext.window.Window",
    alias: "widget.downloadmore",
    title: "Select more files to download",
    modal: true,
    layout: "fit",
    items: [
        {
            xtype: "multifileparams"
        }
    ]
});