Ext.define("Libertor.view.component.SelectLocalFolder", {
    extend: "Ext.form.FieldContainer",
    alias: "widget.selectlocalfolder",
    requires: [
        "Libertor.view.component.LocalFolderSelector"
    ],
    layout: "hbox",
    items: [
        {
            xtype: "textfield",
            fieldLabel: "Path",
            labelWidth: 40
        }, {
            xtype: "button",
            text: "Select",
            margin: "0 0 0 5",
            handler: function () {
                Ext.create("widget.localfolderselector").show();
            }
        }
    ]
});