var Global = require('Global').storage;

cc.Class({
    extends: cc.Component,

    properties: {
        movebtnPrefab: {
            default: null,
            type: cc.Prefab
        },
        sidebarPrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    updateVisiableNodes: function () {
        for (var to of Global.Game.cities[Global.Player.currentCity].to) {
            Global.Player.visibleCities[to.id] = true;
        }
    },

    drawMap: function () {
        var home = Global.Game.cities[Global.Player.currentCity];
        for (var nodeid in Global.Player.visibleCities) {
            if (!Global.Player.visibleCities.hasOwnProperty(nodeid)) {
                continue;
            }

            var city = Global.Game.cities[nodeid];
            if (city.position.background !== home.position.background){
                continue;
            }

            var accessable = false;
            for(var to of home.to) {
                if(to.id === city.id) {
                    accessable = true;
                    if(to.requiredItems !== undefined) for(var rk of to.requiredItems) {
                        if(Global.Player.hasItem(rk) == false) {
                            accessable = false;
                        }
                    }
                }
            }

            var newbtn = cc.instantiate(this.movebtnPrefab);
            this.node.addChild(newbtn);
            // console.log(newbtn);
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
        // console.log(Global.Game);
        // console.log("currentCity: " + Global.Player.currentCity);
        this.updateVisiableNodes();
        this.drawMap();
        var sidebar=cc.instantiate(this.sidebarPrefab);
        this.node.addChild(sidebar);
        sidebar.setPosition(380,0);
        
    },

    btnMove: function (event, customEventData) {
        Global.Player.currentCity = customEventData;
        cc.director.loadScene('MainPanel');
    }
});
