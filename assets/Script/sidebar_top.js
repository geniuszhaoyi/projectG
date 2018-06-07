// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var Global = require("Global").storage;
var Game = require("Game/Game");

var Player = require("Player/Player");
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        itemPre :{
            default:null,
            type:cc.Prefab,
        },
        allitems:[],

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // console.log(Global);
        // Global.Game = new Game();
        // Global.Player = new Player();
        // this.loaditems();
        this.loaditems();
    },

    start () {
        
    },

    loaditems(){
        //console.log(Global.Player.currentNode);
        // for(item in items){

        // }
        console.log(Global.Player.currentCity);
        var npclist=Global.Game.cities[Global.Player.currentCity].getNpcList();
        for(var i=0;i<npclist.length;i++){
            
            var newitem=cc.instantiate(this.itemPre);

            this.node.addChild(newitem);

            newitem.setPosition(0,-70*i-50);
            newitem.getComponent('button').intit(npclist[i]);
            this.allitems.push(newitem);
            
        }
        this.node.height=-newitem.getPosition().y+70;
    },
    ldit(){
        this.node.removeAllChildren();
        console.log(typeof(this.allitems));
        var items=this.allitems;

        var i=0;
        
        for(var item in items){

            this.node.addChild(items[item]);
            items[item].setPosition(0,-70*i-50);
            i++;
        }
        this.node.height=70*i+50+70;
    },
    update (dt) {
    },
});
