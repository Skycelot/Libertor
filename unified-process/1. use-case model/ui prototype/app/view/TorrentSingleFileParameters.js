Ext.define("Libertor.view.TorrentSingleFileParameters", {
    extend: "Ext.container.Container",
    alias: "widget.singlefileparams",
    layout: {
        type: "vbox",
        align: "right"
    },
    padding: 5,
    items: [
        {
            xtype: "textfield",
            fieldLabel: "File name",
        },
        {
            xtype: "textfield",
            fieldLabel: "File place",
        },
        {
            xtype: "button",
            text: "OK",
            itemId: "confirm",
        }
    ]
});