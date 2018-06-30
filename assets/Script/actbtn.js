// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var test=require("dialog");
var Global = require('Global').storage;
var Battle = require('Battle/Battle.js');
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
        labelPre:{
            default:null,
            type:cc.Label,
        },
        diaPre:{
            default:null,
            type:cc.Prefab,
        },
        switchPre:{
            default:null,
            type:cc.Prefab,
        },
        act:null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    btn_clicked(){
        var content=this.act.start();
        switch(content.type){
            case 0:
                console.log("talk");
                var dia=cc.instantiate(this.diaPre);
                cc.find("Canvas").addChild(dia);
                dia.getComponent('dialog').initdialog(content);
                dia.setPosition(0,-202);
                break;
            case 1:
                console.log(content);
                var stch=cc.instantiate(this.switchPre);
                cc.find("Canvas").addChild(stch);
                stch.getComponent('switch').initSW(content);
                stch.setPosition(0,-202);
                break;
            case 'battle':
                var callback = function() {
                    console.log("fight");
                    console.log(content);
                    Global.Memory.battles.currentBattle=new Battle(Global.Player, Global.Game.enemies[content.enemy.enemyid]);
                    Global.Memory.battles.dropItems=content.dropItems;
                    cc.director.loadScene('BattleScene');
                }
                console.log("talk");
                var dia=cc.instantiate(this.diaPre);
                cc.find("Canvas").addChild(dia);
                content.localcallback = callback;
                dia.getComponent('dialog').initdialog(content);
                dia.setPosition(0,-202);
                break;
            default:
                console.log("ignore");
        }
    },
    initBtn(actin){
        
        this.act=actin;
        this.labelPre.string=this.act.name;
        
    }
    // update (dt) {},
});
