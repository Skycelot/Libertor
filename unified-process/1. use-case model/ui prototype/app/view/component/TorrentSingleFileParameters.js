Ext.define("Libertor.view.component.TorrentSingleFileParameters", {
    extend: "Ext.container.Container",
    alias: "widget.singlefileparams",
    requires: [
        "Libertor.view.component.LocalFolderSelector"
    ],
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
                    labelWidth: 90
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