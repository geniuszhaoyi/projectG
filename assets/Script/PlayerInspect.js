var Global = require('Global').storage;
var Game = require('Game/Game.js')
var Player = require('Player/Player.js')

cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
        if(Global.Player === undefined || Global.Player === null) {
            Global.Game = new Game();
            Global.Player = new Player();
        }
    },

    start () {

    },

    // update (dt) {},
});
