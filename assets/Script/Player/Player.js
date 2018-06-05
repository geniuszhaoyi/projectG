class Player {
    npcStatus = {}
    getNpcStatus(key) {
        return npcStatus[key];
    }
    setNpcStatus(key, value) {
        npcStatus[key] = value;
    }
    giveItem() {
        return false;
    }
    attributes = {
        level: 0,
        constitution: 100,
        strength: 0,
        agility: 0,
        mind: 0,
        mentality: 0,
        currentHealth: 1000,
        currentMana: 0,
    };
    currentNode = "city_001";
    visibleNode = {"city_001": true};
}

module.exports = Player;