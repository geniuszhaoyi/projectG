var Global = require('Global').storage;

cc.Class({
    extends: cc.Component,

    properties: {
        lblCurrentHealth: {
            default: null,
            type: cc.Label
        },
        lblLevel: {
            default: null,
            type: cc.Label
        },
        lblConstitution: {
            default: null,
            type: cc.Label
        },

    },

    onLoad () {
        this.lblCurrentHealth.getComponent(cc.Label).string = Global.Player.attributes.currentHealth;
        this.lblLevel.getComponent(cc.Label).string = Global.Player.attributes.level;
        this.lblConstitution.getComponent(cc.Label).string = Global.Player.attributes.constitution;
    },

    start () {

    },

    // update (dt) {},
});
