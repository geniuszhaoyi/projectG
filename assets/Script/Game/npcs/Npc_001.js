var Npc = require ('./../Npc.js');
var Action_001 = require ('./../actions/Action_001');
var Action_002 = require ('./../actions/Action_002');
var Action_003 = require ('./../actions/Action_003');

class Npc_001 extends Npc{
    id = "npc_001";
    name = "npc001";
    city = 'city_001';
    isVisiable() {
        return true;
    }
    actions = [new Action_001(), new Action_002(), new Action_003()]
}

module.exports = Npc_001;