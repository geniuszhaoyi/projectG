var Action = require ('./../Action.js');
var Global = require("./../../Global").storage;

class Action_Npc_Item extends Action{
    /**
     * id is used to indicate weather item is picked up. 
     * @param {String} id 
     * @param {String} item 
     * @param {int} quantity
     */
    constructor(id, item, quantity) {
        super(id, 'search', '');
        this.item = item;
        this.quantity = quantity;
    }
    start() {
        var name = Global.Game.items[this.item].name;
        if(Global.Player.getNpcStatus(this.id, true) === true) {
            return {
                context: {title: "title", text: "It is empty now. "},
                type: 0,
                callback: this._callback.bind(this)
            };
        }else {
            return {
                context: {title: "title", text: "You find a " + name + ". Pick it up? "},
                type: 1,
                callback: this._callback_pickup.bind(this)
            };
        }
    }
    _callback_pickup(message) {
        if(message === true || message === "true") {
            Global.Player.setNpcStatus(this.id, true);
            Global.Player.invertory.giveItem(this.item, this.quantity);
        }
        return true;
    }
}

module.exports = Action_Npc_Item;