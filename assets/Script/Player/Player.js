var Global = require('./../Global').storage;
var Invertory = require('Invertory');

class Player {
    npcStatus = {}
    getNpcStatus(key) {
        return this.npcStatus[key];
    }
    setNpcStatus(key, value) {
        this.npcStatus[key] = value;
    }

    attributes = [0, 100, 0, 0, 0, 0, 1000, 0];

    invertory = new Invertory();

    currentCity = "city_001";
    visibleCities = {"city_001": true};
}

module.exports = Player;