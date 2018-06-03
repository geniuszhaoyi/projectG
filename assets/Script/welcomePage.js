var Global = require('Global');

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function () {
    },

    newGame: function() {
        // var Game = {
        //     map: [
        //         {
        //             id: "node_001",
        //             name: "Home",
        //             position: {x: 100, y: 100, background: "bg_001"},
        //             to: [{id: "node_002", requiredItems: ["key_001"]}],
        //             npcs: ["npc_001"]
        //         },{
        //             id: "node_002",
        //             name: "002",
        //             position: {x: 100, y: 200, background: "bg_001"},
        //             to: [{id: "node_001"},{id: "node_003"}]
        //         },{
        //             id: "node_003",
        //             name: "003",
        //             position: {x: 200, y: 100, background: "bg_001"},
        //             to: [{id: "node_001"},{id: "node_002"}]
        //         }
        //     ],
        //     backgrounds: [
        //         {
        //             id: "bg_001"
        //         }
        //     ],
        //     items: [
        //         {
        //             id: "key_001",
        //             name: "Rusty Key",
        //             description: "An old rusty key. ",
        //         }
        //     ],
        //     npcs: [
        //         {
        //             id: "npc_001",
        //             name: "npc001",
        //             actions: ["action_001", "action_002", "action_003"]
        //         }
        //     ],
        //     actions: [
        //         {
        //             id: "action_001",
        //             action: [
        //                 {
        //                     type: "talk",
        //                     context: "Hello young man. "
        //                 }
        //             ]
        //         },{
        //             id: "action_002",
        //             label: "talk",
        //             action: [
        //                 {
        //                     type: "talk",
        //                     context: "Hello young man again. "
        //                 }
        //             ]
        //         },{
        //             id: "action_003",
        //             label: "search",
        //             action: [
        //                 {
        //                     type: "text",
        //                     context: "You find a rusky key! "
        //                 },{
        //                     type: "giveItem",
        //                     items: ["key_001"]
        //                 }
        //             ],
        //             limit: 1,
        //             outstandingAction: [
        //                 {
        //                     type: "text",
        //                     context: "It is empty now. "
        //                 }
        //             ]
        //         },
        //     ]
        // };
        // var Player = {
        //     currentHealth: 1000,
        //     level: 0,
        //     constitution: 100,
        //     currentNode: "node_001",
        //     visibleNode: ["node_001"],
        //     items: [],
        //     npcStatus: {}
        // };
        // cc.game.setPersistRootNode('Game', Game);
        // Global.Game = Game;
        // cc.game.setPersistRootNode('Player', Player);
        // Global.Player = Player;
        cc.director.loadScene("MainPanel");
    },

});
