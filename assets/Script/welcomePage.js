var Global = require('Global').storage;
var Game = require('Game/Game.js')
var Player = require('Player/Player.js')

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function () {
    },

    newGame: function() {
        Global.Game = new Game();
        Global.Player = new Player();
        cc.director.loadScene("MainPanel");
    },

});
