// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var Global = require('Global').storage;
var Game = require('Game/Game.js')
var Player = require('Player/Player.js')
var Memory = require('Memory/Memory.js')
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
        skillPre:{
            default:null,
            type:cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //Global.Game = new Game();
        //Global.Player = new Player();
        //Global.Memory = new Memory();
        
        //Global.Player.skillset.equipSkill("skill_001");
        console.log(Global.Player);
        var learned=cc.find("Canvas/learnedskill");
        var lskillsets=Global.Player.skillset.getSkills();
        var eskillsets=Global.Player.skillset.getEquippedSkills();
        //load learned skill
        console.log(eskillsets);
        for(var i in lskillsets){
            var newskill=cc.instantiate(this.skillPre);
            newskill.getComponent("btninit").seticon(lskillsets[i]);
            learned.addChild(newskill);
        }
        
        //load equiped skill
        for(var i in eskillsets){
            var address=parseInt(i) +1;
            var adds="Canvas/equipskill/frame"+address.toString();
            var eqskill=cc.find(adds);
            console.log(eskillsets);
            cc.loader.loadRes("Texture/Item/"+eskillsets[i], function(err, data) {
                
                if (!err) {
                    this.spriteFrame = new cc.SpriteFrame(data);
                }else {
                    cc.loader.loadRes("Texture/Item/defaultSkill", function(err, data) {
                        this.spriteFrame = new cc.SpriteFrame(data);
                    }.bind(this));
                }
            }.bind(eqskill.getComponent(cc.Sprite)));
            var chil=eqskill.getChildByName('name');
            chil.getComponent(cc.Label).string=Global.Game.skills[eskillsets[i]].name;
        }
    },


    start () {

    },

    // update (dt) {},
});
