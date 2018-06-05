var City = require("City");
var Position = require("Position");
var Item = require("Item");
var Background = require("Background");
var Npc_001 = require("npcs/Npc_001");

class Game {
    cities = {
        city_001: new City("city_001", "Home", new Position(10, 10, "bg_001"), [{id: "city_002", requiredItems: ["key_001"]}], ["npc_001"]),
        city_002: new City("city_002", "Yard", new Position(120, 10, "bg_001"), [{id: "city_001"},{id: "city_003"}]),
        city_003: new City("city_003", "Street", new Position(120, 120, "bg_001"), [{id: "city_001"},{id: "city_002"}]),
    }
    items = {
        key_001: new Item("key_001", "Rusky Key", "An old rusky key. "),
    }
    backgrounds = {
        bg_001: new Background("bg_001"),
    }
    npcs = {
        npc_001: new Npc_001(),
    }
    constructor() {
    }
}

module.exports = Game;