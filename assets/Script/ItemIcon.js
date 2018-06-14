var Global = require('Global').storage;

cc.Class({
    extends: cc.Component,

    properties: {
        id: {
            default: null,
            type: cc.Integer,
        },
        ItemDetailsScroll: {
            default: null,
            type: cc.Node
        },
    },
    setProperties(id, itemDetailScroll) {
        this.id = id;
        this.ItemDetailsScroll = itemDetailScroll;
    },
    onLoad () {
        this.item = Global.Player.invertory.getItemById(this.id);
        this.node.getChildren()[0].getComponent(cc.Label).string = (this.item.quantity === 1 ? '' : this.item.quantity);
        cc.loader.loadRes("Texture/Item/" + this.item.itemid + "", function(err, data) {
            if (!err) {
                this.spriteFrame = new cc.SpriteFrame(data);
            }else {
                cc.loader.loadRes("Texture/Item/defaultItem", function(err, data) {
                    this.spriteFrame = new cc.SpriteFrame(data);
                }.bind(this));
            }
        }.bind(this.node.getComponent(cc.Sprite)));
        if(this.item.equipped >= 0) {
            this.node.getChildren()[1].opacity = 255;
        }
    },

    start () {

    },

    // update (dt) {},

    btnClick() {
        this.ItemDetailsScroll.getComponent("ItemDetailsScroll").showItem(this.id);
    },
});
