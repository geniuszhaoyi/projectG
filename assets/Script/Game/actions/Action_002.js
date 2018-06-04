var Action = require ('./../Action.js');
var Global = require("./../../Global").storage;

class Action_002 extends Action{
    id = "action_002";
    name = "search";
    context = "You find a Rusky Key. Pick it up? "
    isVisiable() {
        return Global.Player.getNpcStatus("key_001_pickedup") === false;
    }
    start() {
        return {
            context: this.context,
            type: 1,
            callback: this._callback
        };
    }
    _callback(message) {
        if(message === true || message === "true") {
            Global.Player.setNpcStatus("key_001_pickedup", true);
            Global.Player.giveItem("key_001", 1);
        }
        return true;
    }
}

module.exports = Action_002;