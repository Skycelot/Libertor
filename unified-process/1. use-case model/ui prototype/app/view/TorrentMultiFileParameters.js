Ext.define("Libertor.view.TorrentMultiFileParameters", {
    extend: "Ext.container.Container",
    alias: "widget.multifileparams",
    layout: {
        type: "vbox",
        align: "right"
    },
    padding: 5,
    items: [
        {
            xtype: "textfield",
            fieldLabel: "Directory place"
        }, {
            xtype: "treepanel",
            width: 250,
            margin: "0 0 5 0",
            root: {
                text: "Demi Lovato - discography",
                children: [
                    {
                        text: "Don't forget",
                        children: [
                            {
                                text: "Trainwreck",
                                leaf: true
                            },
                            {
                                text: "Believe in Me",
                                leaf: true
                            }
                        ],
                        expanded: true
                    }, {
                        text: "Unbroken",
                        children: [
                            {
                                text: "Lightweight",
                                leaf: true
                            },
                            {
                                text: "Skyscraper",
                                leaf: true
                            }
                        ],
                        expanded: true
                    }
                ],
                expanded: true
            }
        }, {
            xtype: "button",
            text: "OK",
            itemId: "confirm"
        }
    ]
});