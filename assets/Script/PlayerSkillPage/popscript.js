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
        head:{
            default:null,
            type:cc.Label
        },
        describe:{
            default:null,
            type:cc.Label
        },
        skill:null,
    },

    // LIFE-CYCLE CALLBACKS:
    closePop(){
        this.node.parent.getComponent('mask').closeMask();
        this.node.removeFromParent();
    },
    equip(){
        console.log(Global.Player.skillset.getEquippedSkills());
        Global.Player.skillset.equipSkill(this.skill.id);
        console.log(Global.Player.skillset.getEquippedSkills());
        
        this.closePop();
        cc.director.loadScene('PlayerSkill');
    },
    // onLoad () {},
    initdetail(skill){
        this.skill=skill;
        this.head.string=skill.name;
        this.describe.string=skill.description;
    },
    start () {

    },

    // update (dt) {},
});
