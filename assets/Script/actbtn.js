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
                console.log("search");
                break;
            case 2:
                console.log("fight");
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
