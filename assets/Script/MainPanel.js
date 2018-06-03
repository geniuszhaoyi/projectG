var Global = require('Global');

cc.Class({
    extends: cc.Component,

    properties: {
        movebtnPrefab: {
            default: null,
            type: cc.Prefab
        },
    },

    updateVisiableNodes: function () {
        for (var to of Global.Game.map[Global.Player.currentNode].to) {
            Global.Player.visibleNode[to.id] = true;
        }
    },

    drawMap: function () {
        var home = Global.Game.map[Global.Player.currentNode];
        for (var nodeid in Global.Player.visibleNode) {
            if (!Global.Player.visibleNode.hasOwnProperty(nodeid)) {
                continue;
            }

            var city = Global.Game.map[nodeid];
            if (city.position.background !== home.position.background){
                continue;
            }

            var accessable = false;
            for(var to of home.to) {
                if(to.id === city.id) {
                    accessable = true;
                }
            }

            var newbtn = cc.instantiate(this.movebtnPrefab);
            this.node.addChild(newbtn);
            console.log(newbtn);
            newbtn.children[0].getComponent(cc.Label).string = city.name;
            newbtn.setPosition(cc.p(city.position.x, city.position.y));

            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
            clickEventHandler.component = "MainPanel";//这个是代码文件名
            clickEventHandler.handler = "btnMove";
            clickEventHandler.customEventData = nodeid;

            if(city.id === home.id) {
                newbtn.color = cc.Color.YELLOW;
            }
            var button = newbtn.getComponent(cc.Button);
            if(accessable === false) {
                button.interactable = false;
            }
            button.clickEvents.push(clickEventHandler);

        }
    },

    // use this for initialization
    onLoad: function () {
        console.log("currentNode: " + Global.Player.currentNode);
        this.updateVisiableNodes();
        this.drawMap();
    },

    btnMove: function (event, customEventData) {
        Global.Player.currentNode = customEventData;
        cc.director.loadScene('MainPanel');
    }
});
