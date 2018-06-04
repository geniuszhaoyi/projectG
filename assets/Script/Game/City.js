

class City {
    constructor(id, name, position, to, npcs) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.to = to;
        if(to === undefined) this.to = []
        this.npcs = npcs;
        if(npcs === undefined) this.npcs = []
    }
}

module.exports = City;