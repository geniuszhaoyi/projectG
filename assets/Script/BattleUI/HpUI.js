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
        hpText:{
            default:null,
            type:cc.Label,
        },
        hpPic:{
            default:null,
            type:cc.Node,
        },
        maxHp:0,
        curHp:0,
    },

    // LIFE-CYCLE CALLBACKS:
    initHp(maxHp,curHp){
        this.maxHp=parseInt(maxHp,10);
        this.curHp=parseInt(curHp,10);
        this.hpText.string=""+this.curHp+"/"+this.maxHp;
        this.hpPic.width=this.curHp/this.maxHp*230;
    },
    // onLoad () {},
    setCurHp(hp){
        hp=parseInt(hp,10);
        if(hp<0)
            hp=0;
        this.curHp=hp;
        this.hpText.string=""+this.curHp+"/"+this.maxHp;
        this.hpPic.width=this.curHp/this.maxHp*230;
    },

    start () {

    },

    // update (dt) {},
});
