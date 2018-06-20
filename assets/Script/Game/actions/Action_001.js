var Action = require ('./../Action.js');
var Global = require("./../../Global").storage;

class Action_001 extends Action{
    id = "action_001";
    name = "talk";
    talkCount = 0;
    contexts = ["Hello! ", "How are you today? "]
    get context() {
        this.talkCount += 1;
        var text = ''
        if(this.talkCount == 10) {
            Global.Player.invertory.giveItem('helmet_002', 1);
            text =  "You find a designer's crown. It will give you guaranteed wins. You picked it up. "
        }
        text = this.contexts[this.talkCount % this.contexts.length];
        return {title: 'Old Talking Closet', text: text};
    }
    set context(str) {}
}

module.exports = Action_001;