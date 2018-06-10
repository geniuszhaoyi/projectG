var Global = require('Global').storage;
var Game = require('Game/Game.js')
var Player = require('Player/Player.js');
var theTable = require('Game/Numbers/tables')


cc.Class({
    extends: cc.Component,

    properties: {
        ItemIcon: {
            default: null,
            type: cc.Prefab
        },
        ItemDetailsScroll: {
            default: null,
            type: cc.Node
        },
    },

    loadItems() {
        var items = Global.Player.invertory.getItemsInArray();
        var defaultItemIcon = this.defaultItemIcon;
        for(var item of items) {
            var sprite = cc.instantiate(this.ItemIcon);
            sprite.getComponent("ItemIcon").setProperties(item.id, this.ItemDetailsScroll)
            cc.find('Canvas/layout_grid').addChild(sprite);
        }
    },

    onLoad () {
        if(Global.Player === undefined || Global.Player === null) {
            Global.Game = new Game();
            Global.Player = new Player();
        }
        this.loadItems();
    },

    start () {

    },

    // update (dt) {},
});
