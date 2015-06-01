Ext.define("Libertor.view.SelectTorrentFile", {
    extend: "Ext.container.Container",
    alias: "widget.selecttorrentfile",
    layout: "anchor",
    padding: 5,
    items: [
        {
            xtype: "fileuploadfield",
            fieldLabel: "Select torrent file",
            buttonText: "Browse"
        },
        {
            xtype: "button",
            text: "Next",
            itemId: "torrentparams"
        }
    ]
});