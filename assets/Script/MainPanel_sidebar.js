
cc.Class({
    extends: cc.Component,

    properties: {
        sidebarPrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        var sidebar=cc.instantiate(this.sidebarPrefab);
        this.node.addChild(sidebar);
        sidebar.setPosition(380,0);
    },

    start () {

    },

    // update (dt) {},
});
