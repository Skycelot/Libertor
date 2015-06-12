Ext.define("Libertor.view.component.TorrentFileMenu", {
    extend: "Libertor.view.component.Menu",
    alias: "widget.torrentfilemenu",
    requires: [
        "Libertor.view.component.Menu"
    ],
    items: [
        {
            text: "Name"
        }, {
            text: "Priority",
            menu: {
                xtype: "emenu",
                items: [
                    {
                        text: "High"
                    },
                    {
                        text: "Normal"
                    },
                    {
                        text: "Low"
                    }
                ]
            }
        }
    ],
});