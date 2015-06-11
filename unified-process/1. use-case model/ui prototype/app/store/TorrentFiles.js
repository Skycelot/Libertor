Ext.define("Libertor.store.TorrentFiles", {
    extend: "Ext.data.TreeStore",
    model: "Libertor.model.TorrentFile",
    root: {
        text: "Demi Lovato - discography",
        children: [
            {
                text: "Don't forget",
                children: [
                    {
                        text: "Trainwreck",
                        leaf: true,
                        checked: true,
                        priority: "normal"
                    },
                    {
                        text: "Believe in Me",
                        leaf: true,
                        checked: false
                    }
                ],
                expanded: true
            }, {
                text: "Unbroken",
                children: [
                    {
                        text: "Lightweight",
                        leaf: true,
                        checked: false
                    },
                    {
                        text: "Skyscraper",
                        leaf: true,
                        checked: true,
                        priority: "normal"
                    }
                ],
                expanded: true
            }
        ],
        expanded: true
    }
});