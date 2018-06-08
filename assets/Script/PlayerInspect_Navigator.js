
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    btnBack () {
        cc.director.loadScene('MainPanel');
    },
    btnPlayer() {
        cc.director.loadScene('PlayerInspect_Page1');
    },
    btnItems() {
        cc.director.loadScene('PlayerInspect_Items');
    },
});
