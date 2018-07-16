var Npc = require ('./../Npc.js');
var Action = require ('./../Action.js');

class Npc_Enemy extends Npc {
    constructor(id, enemy) {
        console.log("hello     "+enemy);
        super(id, {name: enemy.name, description: enemy.description}, 'city_004');
        this.actions = [new ActionEnemy(id, enemy)];
    }
}

class ActionEnemy extends Action {
    constructor(id, enemy) {
        super('NpcMonster' +id, '打他', '你打了一下' + enemy.name + '，好像惹怒他了！');
        this.enemy = enemy;
        this.dropItems = {win: [{itemid: 'item_001', quantity: 1}], lose: []};
    }
    start() {
        console.log(this.enemy);        
        return {
            context: {title: '', text: this.context},
            type: 'battle',
            enemy: this.enemy,
            dropItems: this.dropItems,
            callback: this._callback.bind(this)
        };
    }
    _callback(message) {
        if(message === true || message === 'true') {
            for(var item of this.dropItems.win) {
                console.log(item);                
                Global.Player.invertory.giveItem(item.itemid, item.quantity);
            }
            return true;
        }else {
            for(var item of this.dropItems.lose) {
                Global.Player.invertory.giveItem(item.itemid, item.quantity);
            }
            return false;
        }
    }
}

module.exports = Npc_Enemy;
