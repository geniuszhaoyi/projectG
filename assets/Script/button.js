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
        text :{
            default:null,
            type : cc.String,
    
        },
        status : {
            default:false,
            type : Boolean,
        },
        popPre:{
            default:null,
            type:cc.Prefab,
        },
        labelPre:{
            default:null,
            type:cc.Label,
        },
        maskPre:{
            default:null,
            type:cc.Prefab,
        },
        curnpc:null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },

    start () {

    },

     update (dt) {
     },
    setbutton(){

        
        //获取view路径下是否已经有popup窗口
        var tmp=cc.find("Canvas/sidebar/sidebar_top/view");

        //但没有popup窗口时创建一个popup窗口
       // if(tmp==null){

            
            var newpop=cc.instantiate(this.popPre);
            var newmask=cc.instantiate(this.maskPre);
            console.log(newpop);
            tmp.addChild(newmask);
            newmask.addChild(newpop);
            newmask.setPosition(-382,-69);
            //var npc=Global.Game.npcs[this.labelPre.string];
            //console.log(this.labelPre.string+"  "+curnpc+"   "+Global.Game.npcs["npc_002"])
            newpop.getComponent('popwin').initPop(this.curnpc);
            newpop.setPosition(380,64);
       // }
    },

    //初始化当前的button
    intit(npc){
        this.curnpc=npc;
        this.labelPre.string=npc.name;
    }
    
});
