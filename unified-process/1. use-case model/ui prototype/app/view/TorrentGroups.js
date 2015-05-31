Ext.define("Libertor.view.TorrentGroups", {
    extend: "Ext.tree.Panel",
    alias: "widget.torrentgroups",
    title: "Groups",
    root: {
        text: "Torrents",
        children: [
            {
                text: "Downloading",
                id: "d",
                leaf: true
            },
            {
                text: "Seeding",
                id: "s",
                leaf: true
            },
            {
                text: "History",
                id: "h",
                leaf: true
            }
        ],
        expanded: true
    },
    value: "Downloading"
});