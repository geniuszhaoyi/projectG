var Npc = require ('./../Npc.js');
var Action = require ('./../Action.js');

class NpcEnemy extends Npc {
    constructor(id, enemy) {
        super(id, {name: enemy.name, description: enemy.description}, 'city_004');
        this.actions = [new ActionEnemy()];
    }
}

class ActionEnemy extends Action {
    constructor() {
        super('NpcMonster' + id, '打他', '你打了一下哥布林，好像惹怒他了！');
    }
    start() {
        return {
            context: {speaker: '', text: this.context},
            type: 'battle',
            enemy: enemy,
            callback: this._callback.bind(this)
        };
    }
    _callback(message) {
        if(message === true || message === 'true') {

            return true;
        }else {

            return false;
        }
    }
}

module.exports = NpcEnemy;