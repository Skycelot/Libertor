Ext.define("Libertor.view.window.SpeedLimits", {
    extend: "Ext.window.Window",
    alias: "widget.speedlimits",
    title: "Speed limits",
    modal: true,
    bodyPadding: 5,
    layout: {
        type: "vbox",
        align: "right"
    },
    items: [
        {
            xtype: "textfield",
            fieldLabel: "Download speed",
            value: "2000000"
        }, {
            xtype: "textfield",
            fieldLabel: "Upload speed",
            value: "1000000"
        }, {
            xtype: "button",
            itemId: "applylimits",
            text: "OK"
        }
    ]
});