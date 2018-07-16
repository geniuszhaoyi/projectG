var Global = require('Global').storage;
var Game = require('Game/Game.js')
var Player = require('Player/Player.js')
var Memory = require('Memory/Memory.js')

var serialize = require('../Lib/serialize-javascript.js')
var deserialize = require('../Lib/deserialize-javascript.js')

cc.Class({
    extends: cc.Component,

    properties: {
    },

    start () {
    },

    saveGame() {
        var str = serialize(Global.Player);
        cc.sys.localStorage.setItem('savedGames', str);
        console.log("Game Saved");
    },

    newGame() {
        Global.Game = new Game();
        Global.Player = new Player();
        Global.Memory = new Memory();
    },

    loadGame() {
        this.newGame()
        deserialize(cc.sys.localStorage.getItem('savedGames'), Global.Player);
        cc.director.loadScene("MainPanel");
    },

    deserialize(serializedJavascript){
        return eval('(' + serializedJavascript + ')');
    }
    // loadGameInfos() {
    //     var userData = JSON.parse(cc.sys.localStorage.getItem('savedGames'));
    // },
});
