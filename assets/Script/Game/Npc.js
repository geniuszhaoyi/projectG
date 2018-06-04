class Npc {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    isVisiable() {
        return true;
    }
    actions = []
}

module.exports = Npc;