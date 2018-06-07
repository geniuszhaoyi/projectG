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
        title:{
            default:null,
            type:cc.Label,
        },
        content:{
            default:null,
            type:cc.Label,
        },
        act:null,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    initSW(content){
        this.act=content;
        this.content.string=this.act.context;
    },
    closeSW(){
        var actlay=cc.find("Canvas/sidebar/sidebar_top/view/mask/popup/action_layout");
        console.log(actlay);
        actlay.getComponent('action_layout').setbtn();
        this.node.removeFromParent();
    },
    choose(a,b){
        if(b==true||b=="true"){
            this.act.callback(true);
            this.closeSW();
            
        }
        if(b==false||b=="false"){
            this.act.callback(false);
            this.closeSW();
        }
    },
    // update (dt) {},
});
