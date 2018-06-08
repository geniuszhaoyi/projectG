class Action {
    constructor(id, name, context) {
        this.id = id;
        this.name = name;
        this.context = context;
    }
    isVisiable() {
        return true;
    }
    start() {
        return {
            context: this.context,
            type: 0,
            callback: this._callback.bind(this)
        };
    }
    _callback(message) {
        return true;
    }
}

module.exports = Action;