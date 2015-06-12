Ext.define("Libertor.view.component.Menu", {
    extend: "Ext.menu.Menu",
    alias: "widget.emenu",
    onMouseLeave: function (e) {
        var menu = this;
        if (menu.activeItem && menu.activeItem.menu) {
            console.log("onMouseLeave: has submenu");
            setTimeout(function () {
                if (!menu.activeItem.menu.mouseInside) {
                    menu.deactivateActiveItem();
                }
            }, 100);
        } else {
            console.log("onMouseLeave: hasn't submenu");
            menu.deactivateActiveItem();
        }
        if (menu.disabled) {
            return;
        }
        menu.fireEvent('mouseleave', menu, e);
    },
    mouseInside: false,
    listeners: {
        mouseenter: function (menu) {
            menu.mouseInside = true;
        },
        mouseleave: function (menu) {
            menu.mouseInside = false;
            if (menu.up("emenu")) {
                console.log("mouseleave: has parent");
                setTimeout(function () {
                    if (!menu.parentMenu.mouseInside) {
                        menu.parentMenu.deactivateActiveItem();
                    }
                }, 100);
            } else {
                console.log("mouseleave: hasn't parent");
            }
        }
    }
});