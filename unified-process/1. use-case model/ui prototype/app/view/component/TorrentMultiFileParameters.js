Ext.define("Libertor.view.component.TorrentMultiFileParameters", {
    extend: "Ext.container.Container",
    alias: "widget.multifileparams",
    requires: [
        "Libertor.view.component.SelectLocalFolder", "Libertor.view.component.TorrentFileMenu"
    ],
    layout: {
        type: "vbox",
        align: "right"
    },
    padding: 5,
    items: [
        {
            xtype: "container",
            layout: "vbox",
            items: [
                {
                    xtype: "selectlocalfolder",
                }, {
                    xtype: "treepanel",
                    width: 400,
                    margin: "0 0 5 0",
                    columns: [
                        {
                            xtype: "treecolumn",
                            text: "Name",
                            dataIndex: "text",
                            flex: 3
                        },
                        {
                            text: "Priority",
                            dataIndex: "priority",
                            flex: 1
                        }
                    ],
                    store: "TorrentFiles",
                    listeners: {
                        itemcontextmenu: function (object, record, item, index, e) {
                            e.stopEvent();
                            Ext.create("widget.torrentfilemenu").showAt(e.getXY());
                        }
                    }

                }
            ]
        }, {
            xtype: "button",
            text: "OK",
            itemId: "confirm"
        }
    ]
});