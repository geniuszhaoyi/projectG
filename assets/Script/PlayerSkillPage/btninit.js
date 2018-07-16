var Global = require('Global').storage;
// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

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
        skill:null,
        detial:{
            default:null,
            type:cc.Prefab,
        },
        maskPre:{
            default:null,
            type:cc.Prefab,
        },
        equiped:null
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {
    //     var skilld=new skill1("skill_001");
    //     this.seticon(skilld);
        
    // },

    seticon(skilld){
        this.equiped=Global.Player.skillset.isEquippedBySkillid(skilld);
        this.skill=Global.Game.skills[skilld];
        console.log("this.skill  "+this.skill);
        cc.loader.loadRes("Texture/Item/"+this.skill.id, function(err, data) {
            //console.log(skilld.id);
            if (!err) {
                this.spriteFrame = new cc.SpriteFrame(data);
            }else {
                cc.loader.loadRes("Texture/Item/defaultSkill", function(err, data) {
                    this.spriteFrame = new cc.SpriteFrame(data);
                }.bind(this));
            }
        }.bind(this.node.getComponent(cc.Sprite)));
    },
    btn_clicked(){
        var tmp=cc.find("Canvas");
        var newpop=cc.instantiate(this.detial);
        var newmask=cc.instantiate(this.maskPre);
        console.log(newpop);
        tmp.addChild(newmask);
        newmask.addChild(newpop);
        newmask.setPosition(0,0);
        //var npc=Global.Game.npcs[this.labelPre.string];
        //console.log(this.labelPre.string+"  "+curnpc+"   "+Global.Game.npcs["npc_002"])
        newpop.getComponent('popscript').initdetail(this.skill);
        //newpop.setPosition(380,64);
    },
    start () {

    },

    // update (dt) {},
});
