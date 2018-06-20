var Npc = require ('./../Npc.js');
var Action = require ('./../Action.js');

class Npc_Monster extends Npc {
    constructor(id, enemy) {
        console.log("hello     "+enemy);
        super(id, {name: enemy.name, description: enemy.description}, 'city_004');
        this.actions = [new ActionEnemy(id,enemy)];
       
    }
}

class ActionEnemy extends Action {
    constructor(id, enemy) {
        
        super('NpcMonster' +id, '打他', '你打了一下哥布林，好像惹怒他了！');
        this.enemy=enemy
    }
    start() {
        return {
            context: {speaker: '', text: this.context},
            type: 'battle',
            enemy: this.enemy,
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

module.exports = Npc_Monster;