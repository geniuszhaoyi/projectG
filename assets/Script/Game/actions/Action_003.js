var Action = require ('./../Action.js');
var Global = require("./../../Global").storage;

class Action_003 extends Action{
    id = "action_003";
    name = "search";
    context = "It is empty now. "
    isVisiable() {
        return Global.Player.getNpcStatus("key_001_pickedup") === true;
    }
}

module.exports = Action_003;