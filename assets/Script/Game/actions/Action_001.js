var Action = require ('./../Action.js');

class Action_001 extends Action{
    id = "action_001";
    name = "talk";
    talkCount = 0;
    contexts = ["Hello! ", "How are you today? "]
    get context() {
        this.talkCount += 1;
        return this.contexts[this.talkCount % this.contexts.length];
    }
    set context(str) {}
}

module.exports = Action_001;