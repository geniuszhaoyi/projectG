var Global = require('Global');

cc.Class({
    extends: cc.Component,

    properties: {
        movebtnPrefab: {
            default: null,
            type: cc.Prefab
        },
    },

    updateVisiableNodes: function() {},

    drawMap: function() {
        for(var nodeid in Global.Player.visibleNode) if(Global.Player.visibleNode.hasOwnProperty(nodeid)) {
            console.log(nodeid);
            var newbtn = cc.instantiate(this.movebtnPrefab);
            this.node.addChild(newbtn);
            newbtn.setPosition(cc.p(Global.Game.map[nodeid].position.x, Global.Game.map[nodeid].position.y));

            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
            clickEventHandler.component = "MainPanel";//这个是代码文件名
            clickEventHandler.handler = "btnMove";
            clickEventHandler.customEventData = nodeid;
    // 
            // var button = node.getComponent(cc.Button);
            console.log(newbtn);
            newbtn.clickEvents.push(clickEventHandler);

        }
    },

    // use this for initialization
    onLoad: function () {
        console.log("currentNode: " + Global.Player.currentNode);
        this.updateVisiableNodes();
        this.drawMap();
    },

    btnMove: function(event, customEventData) {
        Global.Player.currentNode = customEventData;
        cc.director.loadScene('MainPanel');
    }
});
