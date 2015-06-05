Ext.define("Libertor.view.SeedFromHistory", {
    extend: "Ext.window.Window",
    alias: "widget.seedfromhistory",
    title: "Add torrent for seeding",
    modal: true,
    layout: "fit",
    items: [
        {
            xtype: "multifileparams"
        }
    ]
});