Ext.application({
    name: "Libertor",
    autoCreateViewport: true,
    controllers: [
        "PrototypeRouter"
    ],
    launch: function () {
        application = this;
        console.log("Application has launched.");
    }
});
