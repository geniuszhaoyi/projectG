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
        action:{
            default:null,
            type:cc.Prefab,
        },
        actions:[],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    loadbtn(acts){
        for(var i=0;i<acts.length;i++){
            console.log(acts[i]);
            this.actions.push(acts[i]);
        }
        var i=0;
        for(var act in this.actions){
            console.log(this.actions[act]);
            if(this.actions[act].isVisiable()){
            var newbtn=cc.instantiate(this.action);
            this.node.addChild(newbtn);
            newbtn.setPosition(12.5+(50+12.5)*(i%3),-20-(30+20)*(i/3<1?0:1));
            newbtn.getComponent('actbtn').initBtn(this.actions[act]);
            i++;
            //console.log(i/3);
            }
        }

    },
    start () {

    },

    // update (dt) {},
});
