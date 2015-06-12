Ext.define("Libertor.view.StatusBar", {
    extend: "Ext.toolbar.Toolbar",
    alias: "widget.statusbar",
    items: [
        "->", {text: "D: 0 kb/s (2 mb/s) - 0 Mb (10 Gb)"}, "-", {text: "U: 0 kb/s (1 mb/s) - 0 Mb (4 Gb)"}, "->"
    ]
});