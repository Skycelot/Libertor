Ext.define("Libertor.view.window.AddTorrent", {
    extend: "Ext.window.Window",
    alias: "widget.addtorrent",
    title: "Add torrent for downloading",
    modal: true,
    layout: "fit",
    items: [
        {
            xtype: "selecttorrentfile"
        }
    ]
});