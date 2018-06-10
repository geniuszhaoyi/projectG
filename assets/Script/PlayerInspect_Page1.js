var Global = require('Global').storage;
var Game = require('Game/Game.js')
var Player = require('Player/Player.js')
var table = require('Game/Numbers/tables')
var Calculator = require('Game/Numbers/Calculator')
var Invertory = require('Player/Invertory');

cc.Class({
    extends: cc.Component,

    properties: {
        attributeLabel: {
            default: null,
            type: cc.Prefab
        },
    },

    createLabel(l, value) {
        var label = cc.instantiate(this.attributeLabel);
        cc.find('Canvas/layout_grid').addChild(label);
        label.children[0].getComponent(cc.Label).string = l;
        label.children[1].getComponent(cc.Label).string = value;
        return label;
    },

    createAttributes() {
        for(var i in table.attribute) {
            this.createLabel(table.attribute[i] + ": ", Global.Player.attributes[i]);
        }
        this.createLabel('', '');
        var derivedAttributes = Calculator.getDerivedAttributes(
            Global.Player.attributes, 
            Global.Player.invertory.getItemsInArray().map(item => Invertory.extendItem(item))
        );
        for(var i in table.derivedAttribute) {
            this.createLabel(table.derivedAttribute[i] + ": ", derivedAttributes[i]);
        }
    },

    onLoad () {
        if(Global.Player === undefined || Global.Player === null) {
            Global.Game = new Game();
            Global.Player = new Player();
        }
        this.createAttributes();
    },

    start () {

    },

    // update (dt) {},
});
