Ext.define("Libertor.view.component.TorrentSingleFileParameters", {
    extend: "Ext.container.Container",
    alias: "widget.singlefileparams",
    layout: {
        type: "vbox",
        align: "right"
    },
    padding: 5,
    items: [
        {
            xtype: "container",
            layout: {
                type: "vbox",
                align: "left"
            },
            items: [
                {
                    xtype: "textfield",
                    fieldLabel: "File name",
                }, {
                    xtype: "selectlocalfolder"
                }
            ]
        }, {
            xtype: "button",
            text: "OK",
            itemId: "confirm",
        }
    ]
});