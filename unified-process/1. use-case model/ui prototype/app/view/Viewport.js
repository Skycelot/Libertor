Ext.define("Libertor.view.Viewport", {
    extend: "Ext.container.Viewport",
    layout: "border",
    items: [
        {
            xtype: "torrentgroups",
            region: "west",
            width: 250,
            margin: "10 10 10 10"
        }, {
            xtype: "container",
            itemId: "listarea",
            layout: "fit",
            region: "center",
            margin: "10 10 10 0"
        }, {
            xtype: "statusbar",
            region: "south",
            height: 30,
            margin: "0 10 20 10"
        }
    ]
});
