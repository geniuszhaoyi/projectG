class Npc {
    constructor(id, namedesc, city) {
        this.id = id;
        if(namedesc !== undefined) {
            this.name = namedesc.name;
            this.description = namedesc.description
        }
        this.city = city;
    }
    isVisiable() {
        return true;
    } 
    isInCity(city) {
        return this.city === city;
    }
    getCity() {
        return this.city;
    }
    actions = []
}

module.exports = Npc;