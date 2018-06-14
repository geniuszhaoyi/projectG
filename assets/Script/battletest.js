var Global = require('Global').storage;
var Game = require('Game/Game.js')
var Player = require('Player/Player.js')
var Battle = require('Battle/Battle.js')

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function () {
        Global.Game = new Game();
        Global.Player = new Player();
        var battle = new Battle(Global.Player, Global.Game.enemies['enemy_001']);
        console.log(battle);
        while(battle.hasNext()) {
            var event = battle.next();
            console.log(event);
        }
    },

});
