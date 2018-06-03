module.exports = {
    Game: {
        map: {
            node_001: {
                id: "node_001",
                name: "Home",
                position: {x: 10, y: 10, background: "bg_001"},
                to: [{id: "node_002", requiredItems: ["key_001"]}],
                npcs: ["npc_001"]
            },
            node_002: {
                id: "node_002",
                name: "Yard",
                position: {x: 10, y: 120, background: "bg_001"},
                to: [{id: "node_001"},{id: "node_003"}]
            },
            node_003: {
                id: "node_003",
                name: "Street",
                position: {x: 120, y: 120, background: "bg_001"},
                to: [{id: "node_001"},{id: "node_002"}]
            }
        },
        backgrounds: {
            bg_001: {
                id: "bg_001"
            }
        },
        items: {
            key_001: {
                id: "key_001",
                name: "Rusty Key",
                description: "An old rusty key. ",
            }
        },
        npcs: {
            npc_001: {
                id: "npc_001",
                name: "npc001",
                actions: ["action_001", "action_002", "action_003"]
            }
        },
        actions: {
            action_001: {
                id: "action_001",
                action: [
                    {
                        type: "talk",
                        context: "Hello young man. "
                    }
                ]
            },
            action_002: {
                id: "action_002",
                label: "talk",
                action: [
                    {
                        type: "talk",
                        context: "Hello young man again. "
                    }
                ]
            },
            action_003: {
                id: "action_003",
                label: "search",
                action: [
                    {
                        type: "text",
                        context: "You find a rusky key! "
                    },{
                        type: "giveItem",
                        items: ["key_001"]
                    },{
                        type: "script",
                        script: 'Global.Game.npcs.npc_001.actions[2] = "action_004"'
                    }
                ]
            },
            action_004: {
                id: "action_002",
                label: "search",
                action: [
                    {
                        type: "talk",
                        context: "It is empty now. "
                    }
                ]
            },
        }
    },
    Player: {
        currentHealth: 1000,
        level: 0,
        constitution: 100,
        currentNode: "node_001",
        visibleNode: {"node_001": true},
        items: [],
        npcStatus: {}
    },
};
