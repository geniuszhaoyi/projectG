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
        itemid: {
            default: null,
            type: String,
        },
        ItemDetailsScroll: {
            default: null,
            type: cc.Node
        },
        quantity: {
            default: "",
            type: String,
        }
    },

    onLoad () {
        this.node.getChildren()[0].getComponent(cc.Label).string = this.quantity;
        cc.loader.loadRes("Texture/Item/" + this.itemid + "", function(err, data) {
            if (!err) {
                this.spriteFrame = new cc.SpriteFrame(data);
            }else {
                cc.loader.loadRes("Texture/Item/defaultItem", function(err, data) {
                    this.spriteFrame = new cc.SpriteFrame(data);
                }.bind(this));
            }
        }.bind(this.node.getComponent(cc.Sprite)));
    },

    start () {

    },

    // update (dt) {},

    btnClick() {
        this.ItemDetailsScroll.getComponent("ItemDetailsScroll").showItem(this.itemid);
    },
});
