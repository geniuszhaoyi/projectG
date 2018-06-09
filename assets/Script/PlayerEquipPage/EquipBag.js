// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var Global=require("Global").storage;
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
        itemico:{
            default:null,
            type:cc.Prefab,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.loadicon();
    },
    loadicon(){
        var invert = Global.Player.invertory.items;
        var allItems = Global.Game.items;
        for(var equip in invert){
            if(allItems[invert[equip].id].equipPosition<50){
                var icon = cc.instantiate(this.itemico);
                icon.getComponent('ItemIcon').setProperties(invert[equip].id,cc.find("Canvas/ItemDetailsScroll"),invert[equip].quantity);
                cc.find("Canvas/page_1/singleColor/scrollview/view/content").addChild(icon);
            }
        }
    },
    start () {

    },

    // update (dt) {},
});
