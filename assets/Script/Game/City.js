var Global = require("./../../Global").storage;

class City {
    constructor(id, name, position, to) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.to = to;
        // if(to === undefined) this.to = []
    }
    getNpcList() {
        var res = [];
        for(var npc of Global.Game.npcs) {
            if(npc.isInCity(this.id)) {
                res.push(npc);
            }
        }
        return res;
    }
}

module.exports = City;