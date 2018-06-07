class Npc {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
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