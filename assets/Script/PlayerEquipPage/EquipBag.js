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
var table=require("Game/Numbers/tables");
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
        helmet:{
            default:null,
            type:cc.Label,
        },
        cloth:{
            default:null,
            type:cc.Label,
        },
        shoulders:{
            default:null,
            type:cc.Label,
        },
        handguard:{
            default:null,
            type:cc.Label,
        },
        pants:{
            default:null,
            type:cc.Label,
        },
        shoes:{
            default:null,
            type:cc.Label,
        },
        ring:{
            default:null,
            type:cc.Label,
        },
        nicklace:{
            default:null,
            type:cc.Label,
        },
        weapon:{
            default:null,
            type:cc.Label,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.loadicon();
    },
    loadicon(){
        var invert = Global.Player.invertory.getItemsInArray();
        var allItems = Global.Game.items;
        for(var equip in invert){
            if(allItems[invert[equip].itemid].equipPosition<50){
                var icon = cc.instantiate(this.itemico);
                icon.getComponent('ItemIcon').setProperties(equip,cc.find("Canvas/ItemDetailsScroll"));
                cc.find("Canvas/page_1/singleColor/scrollview/view/content").addChild(icon);
                if(invert[equip].equipped!=undefined){
                    this[table.equipment[invert[equip].equipped]].string=table.equipment[invert[equip].equipped]+": "+allItems[invert[equip].itemid].name;
                    this[table.equipment[invert[equip].equipped]].node.color = new cc.Color(0, 102, 255);
                }
            }
        }
    },
   
    start () {

    },

    // update (dt) {},
});
