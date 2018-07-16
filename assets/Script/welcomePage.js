var Global = require('Global').storage;
var Game = require('Game/Game.js')
var Player = require('Player/Player.js')
var Memory = require('Memory/Memory.js')

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function () {
    },

    newGame: function() {
        Global.Game = new Game();
        Global.Player = new Player();
        Global.Memory = new Memory();
        Global.Player.skillset.learnSkill("skill_001");
        console.log('Global: ');
        console.log(Global);
        cc.director.loadScene("MainPanel");
    },

});
