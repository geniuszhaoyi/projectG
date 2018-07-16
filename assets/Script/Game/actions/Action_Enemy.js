var Action = require ('./../Action.js');
var Global = require('Global').storage;

class Action_Enemy extends Action {
    constructor(id, enemy, appear_times) {
        super('NpcMonster' +id, '打他', '你打了一下' + enemy.name + '，好像惹怒他了！');
        this.enemy = enemy;
        this.appear_times = appear_times;
    }
    isVisiable() {
        if(Global.Player.getNpcStatus("city_004_onload_enemy") === undefined) {
            Global.Player.setNpcStatus("city_004_onload_enemy", 0);
        }
        return Global.Player.getNpcStatus("city_004_onload_enemy") !== this.appear_times;
    }
    start() {
        if(!this.isVisiable()) {
            return {
                context: {title: '', text: ''},
                type: '-1',
                callback: undefined,
            };
        }else {
            Global.Player.setNpcStatus("city_004_onload_enemy", Global.Player.getNpcStatus("city_004_onload_enemy") + 1)
            return {
                context: {title: '', text: this.context},
                type: 'battle',
                enemy: this.enemy,
                callback: this._callback.bind(this)
            };
        }
    }
    _callback(message) {
        if(message === true || message === 'true') {

            return new Action('callback_action', 'callback_action', 'callback action');
        }else {

            return false;
        }
    }
}

module.exports = Action_Enemy;