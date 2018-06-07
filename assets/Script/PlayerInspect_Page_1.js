var Global = require('Global').storage;
var Game = require('Game/Game.js')
var Player = require('Player/Player.js')

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
        cc.find('Canvas/page_1/layout_grid').addChild(label);
        label.children[0].getComponent(cc.Label).string = l;
        label.children[1].getComponent(cc.Label).string = value;
        return label;
    },

    createAttributes() {
        var attr = Global.Player.attributes;
        var list = [{
            label: 'currentHealth: ',
            value: Global.Player.attributes.currentHealth
        }, {
            label: 'currentMana: ',
            value: Global.Player.attributes.currentMana
        }, {
            label: 'level: ',
            value: Global.Player.attributes.level
        }, {
            label: 'constitution: ',
            value: Global.Player.attributes.constitution
        }, {
            label: 'strength: ',
            value: Global.Player.attributes.strength
        }, {
            label: 'agility: ',
            value: Global.Player.attributes.agility
        }, {
            label: 'mind: ',
            value: Global.Player.attributes.mind
        }, {
            label: 'mentality: ',
            value: Global.Player.attributes.mentality
        }, {
            label: '',
            value: ''
        }, {
            label: 'maxHealth: ',
            value: (attr.constitution * 10 + attr.strength) * (attr.level * 0.015 + 1) + 0
        }, {
            label: 'maxMana: ',
            value: (attr.mentality * 8 + attr.mind) * (attr.level * 0.01 + 1) + 0
        }, {
            label: 'attack: ',
            value: (attr.strength * 5 + attr.constitution) * (attr.level * 0.008 + 1) + 0
        }, {
            label: 'magic power: ',
            value: (attr.mind * 4 + attr.mentality) * (attr.level * 0.01 + 1) + 0
        }, {
            label: 'defense: ',
            value: (attr.constitution * 1.5 + attr.strength * 1.5 + attr.agility) * (attr.level * 0.006 + 1) + 0
        }, {
            label: 'magic resistance: ',
            value: (attr.mind * 2 + attr.agility) * (attr.level * 0.006 + 1) + 0
        }, {
            label: 'Dexterity: ',
            value: (attr.agility * 1.5) + 0
        // }, {
        //     label: 'hit: ',
        //     value: (attr.constitution * 10 + attr.strength) * (attr.level * 0.015 + 1) + 0
        }, {
            label: 'critical: ',
            value: (attr.agility * 0.8) + 0
        }];
        for(var l of list) {
            this.createLabel(l.label, l.value);
        }
    },

    onLoad () {
        this.createAttributes();
        // this.lblCurrentMana.getComponent(cc.Label).string = Global.Player.attributes.currentMana;
        // this.lblLevel.getComponent(cc.Label).string = Global.Player.attributes.level;
        // this.lblConstitution.getComponent(cc.Label).string = Global.Player.attributes.constitution;
        // this.lblStrength.getComponent(cc.Label).string = Global.Player.attributes.strength;
        // this.lblAgility.getComponent(cc.Label).string = Global.Player.attributes.agility;
        // this.lblMind.getComponent(cc.Label).string = Global.Player.attributes.mind;
        // this.lblMentality.getComponent(cc.Label).string = Global.Player.attributes.mentality;
    },

    start () {

    },

    // update (dt) {},
});
