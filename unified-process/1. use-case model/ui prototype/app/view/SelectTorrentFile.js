Ext.define("Libertor.view.SelectTorrentFile", {
    extend: "Ext.container.Container",
    alias: "widget.selecttorrentfile",
    layout: {
        type: "vbox",
        align: "right"
    },
    padding: 5,
    items: [
        {
            xtype: "fieldcontainer",  //workaround with browse button hidden with vbox layout in 4.2
            items: [
                {
                    xtype: "fileuploadfield",
                    fieldLabel: "Select torrent file",
                    buttonText: "Browse", 
                }
            ]
        },
        {
            xtype: "button",
            text: "Next",
            itemId: "torrentparams",
        }
    ]
});