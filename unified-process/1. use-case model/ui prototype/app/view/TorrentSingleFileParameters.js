Ext.define("Libertor.view.TorrentSingleFileParameters", {
    extend: "Ext.container.Container",
    alias: "widget.singlefileparams",
    layout: "anchor",
    padding: 5,
    items: [
        {
            xtype: "textfield",
            fieldLabel: "File name",
            anchor: "100% 33%"
        },
        {
            xtype: "textfield",
            fieldLabel: "File place",
            anchor: "100% 33%"
        },
        {
            xtype: "button",
            text: "OK",
            itemId: "confirm",
            anchor: "20% 33%"
        }
    ]
});