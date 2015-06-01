Ext.define("Libertor.view.TorrentMultiFileParameters", {
    extend: "Ext.container.Container",
    alias: "widget.multifileparams",
    layout: "vbox",
    defaults: {
        margins: 5
    },
    items: [
        {
            xtype: "button",
            title: "OK",
            itemId: "confirm"
        }
    ]
});