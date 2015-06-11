Ext.define("Libertor.view.component.SelectLocalFolder", {
    extend: "Ext.form.FieldContainer",
    alias: "widget.selectlocalfolder",
    layout: "hbox",
    items: [
        {
            xtype: "textfield",
            fieldLabel: "Path",
            labelWidth: 40
        }, {
            xtype: "button",
            text: "Select",
            margin: "0 0 0 5"
        }
    ]
});