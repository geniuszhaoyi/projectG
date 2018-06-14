var Npc = require ('./../Npc.js');
var Action_Npc_Item = require ('./../actions/Action_Npc_Item');

class Npc_Item extends Npc{
    constructor(id, name, city, item, quantity) {
        super(id, name, city);
        this.actions = [new Action_Npc_Item(id + item + quantity, item, quantity)];
    }
}

module.exports = Npc_Item;