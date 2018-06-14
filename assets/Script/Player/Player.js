var Global = require('./../Global').storage;
var Invertory = require('Invertory');
var Skillset = require('Skillset');

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

    skillset = new Skillset();

    currentCity = "city_001";
    visibleCities = {"city_001": true};
}

module.exports = Player;