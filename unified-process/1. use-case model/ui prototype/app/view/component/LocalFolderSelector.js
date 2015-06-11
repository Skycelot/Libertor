Ext.define("Libertor.view.component.LocalFolderSelector", {
    extend: "Ext.window.Window",
    alias: "widget.localfolderselector",
    title: "Choose a folder",
    modal: true,
    bodyPadding: 5,
    layout: "vbox",
    items: [
        {
            xtype: "treepanel",
            width: 400,
            store: "LocalFileSystem"
        }, {
            xtype: "fieldcontainer",
            layout: "hbox",
            margin: "5 0 0 0",
            items: [
                {
                    xtype: "textfield",
                    fieldLabel: "Path",
                    labelWidth: 40
                },
                {
                    xtype: "button",
                    text: "OK",
                    margin: "0 0 0 5"
                }
            ]
        }
    ]
});