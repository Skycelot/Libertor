Ext.define("Libertor.store.LocalFileSystem", {
    extend: "Ext.data.TreeStore",
    root: {
        text: "/",
        children: [
            {
                text: "home",
                children: [
                    {
                        text: "user",
                        leaf: true
                    }
                ]
            }, {
                text: "usr",
                children: [
                    {
                        text: "bin",
                        leaf: true
                    }
                ]
            }, {
                text: "var",
                children: [
                    {
                        text: "lib",
                        leaf: true
                    }
                ]
            }
        ],
        expanded: true
    }
});