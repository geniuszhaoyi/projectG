var Global = require('Global').storage;
var Game = require('Game/Game.js')
var Player = require('Player/Player.js');
var theTable = require('Game/Numbers/tables')


cc.Class({
    extends: cc.Component,

    properties: {
        ItemIcon: {
            default: null,
            type: cc.Prefab
        },
    },

    loadItems() {
        var items = Global.Player.invertory.items;
        var defaultItemIcon = this.defaultItemIcon;
        for(var k in items) {
            var sprite = cc.instantiate(this.ItemIcon);
            sprite.getChildren()[0].getComponent(cc.Label).string = items[k];
            cc.find('Canvas/layout_grid').addChild(sprite);

            cc.loader.loadRes("Texture/Item/" + k + "", function(err, data) {
                if (!err) {
                    this.spriteFrame = new cc.SpriteFrame(data);
                }else {
                    cc.loader.loadRes("Texture/Item/defaultItem", function(err, data) {
                        this.spriteFrame = new cc.SpriteFrame(data);
                    }.bind(this));
                }
            }.bind(sprite.getComponent(cc.Sprite)));

            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
            clickEventHandler.component = "PlayerInspect_Items";//这个是代码文件名
            clickEventHandler.handler = "itemBtnClick";
            clickEventHandler.customEventData = k;
            var button = sprite.getComponent(cc.Button);
            button.clickEvents.push(clickEventHandler);

        }
    },

    onLoad () {
        if(Global.Player === undefined || Global.Player === null) {
            Global.Game = new Game();
            Global.Player = new Player();
        }
        this.loadItems();
        this.itemBtnClick = this.itemBtnClick.bind(this);
    },

    start () {

    },

    itemBtnClick (event, customEventData) {
        var itemid = customEventData;

        cc.find('Canvas/scroll/view/layout').destroyAllChildren();
        
        var sprite = cc.instantiate(this.ItemIcon);
        sprite.getChildren()[0].getComponent(cc.Label).string = '';
        sprite.setPosition(0, 0);
        cc.find('Canvas/scroll/view/layout').addChild(sprite);
        cc.loader.loadRes("Texture/Item/" + itemid + "", function(err, data) {
            if (!err) {
                this.spriteFrame = new cc.SpriteFrame(data);
            }else {
                cc.loader.loadRes("Texture/Item/defaultItem", function(err, data) {
                    this.spriteFrame = new cc.SpriteFrame(data);
                }.bind(this));
            }
        }.bind(sprite.getComponent(cc.Sprite)));

        var item = Global.Game.items[itemid];
        this.createText(item.name, 40, cc.Label.HorizontalAlign.CENTER);
        this.createText(item.description);
        this.createText("Quantity: " + Global.Player.invertory.items[itemid]);
        if(item.equipPosition) this.createText("Position: " + theTable.equipment[item.equipPosition]);
        if(item.attributes){
            for(var i in item.attributes) {
                var attr = item.attributes[i];
                if(attr != 0) {
                    this.createText('Gain ' + theTable.derivedAttribute[i] + ": " + attr);
                }
            }
        }
    },

    createText(text, fontSize, align) {
        var node = new cc.Node();
        node.setPosition(0, 0);
        node.setContentSize(320, 40);
        node.color = cc.Color.BLACK;
        node.addComponent(cc.Label);
        var label = node.getComponent(cc.Label);
        label.string = text;
        label.fontSize = 32;
        if(fontSize) label.fontSize = fontSize;
        if(align) label.horizontalAlign = align;
        label.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
        cc.find('Canvas/scroll/view/layout').addChild(node);
        return node;
    },

    // update (dt) {},
});
