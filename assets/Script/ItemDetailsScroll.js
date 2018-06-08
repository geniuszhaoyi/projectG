var Global = require('Global').storage;
var theTable = require('Game/Numbers/tables')

cc.Class({
    extends: cc.Component,

    properties: {
        ItemIcon: {
            default: null,
            type: cc.Prefab
        },
        EquipItButton: {
            default: null,
            type: cc.Prefab
        },
    },

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    showItem(itemid) {
        this.itemid = itemid;

        this.node.getChildByName('view').getChildByName('layout').destroyAllChildren();
        
        var sprite = cc.instantiate(this.ItemIcon);
        sprite.getComponent("ItemIcon").itemid = itemid;
        sprite.getComponent("ItemIcon").btnClick = function(){}
        sprite.getChildren()[0].getComponent(cc.Label).string = '';
        sprite.setPosition(0, 0);
        this.node.getChildByName('view').getChildByName('layout').addChild(sprite);
        
        var item = Global.Game.items[itemid];
        this.createText(item.name, 40, cc.Label.HorizontalAlign.CENTER);
        this.createText(item.description);
        this.createText("Quantity: " + Global.Player.invertory.items[itemid]);
        if(item.equipPosition !== undefined) {
            this.createText("Position: " + theTable.equipment[item.equipPosition]);
            this.createEquipButton(itemid);
        }
        if(item.attributes){
            for(var i in item.attributes) {
                var attr = item.attributes[i];
                if(attr != 0) {
                    this.createText('Gain ' + theTable.derivedAttribute[i] + ": " + attr);
                }
            }
        }
    },

    createEquipButton(itemid) {
        var node = cc.instantiate(this.EquipItButton);
        node.setPosition(0, 0);

        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = "ItemDetailsScroll";//这个是代码文件名
        clickEventHandler.handler = "btnEquipItem";
        clickEventHandler.customEventData = itemid;
        var button = node.getComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);

        this.node.getChildByName('view').getChildByName('layout').addChild(node);

        return node;
    },

    btnEquipItem (event, customEventData) {
        var itemid = customEventData;
        Global.Player.invertory.equipItem(itemid);
        cc.director.loadScene('PlayerInspect_Items');
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
        this.node.getChildByName('view').getChildByName('layout').addChild(node);
        return node;
    },

});
