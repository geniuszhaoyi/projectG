var Global = require("./../../Global").storage;

class City {
    constructor(id, name, position, to, action) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.to = to;
        this.action = action
        // if(to === undefined) this.to = []
    }
    getNpcList() {
        var res = [];
        for(var id in Global.Game.npcs) {
            var npc = Global.Game.npcs[id];
            if(npc.isInCity(this.id)) {
                res.push(npc);
            }
        }
        return res;
    }
}

module.exports = City;