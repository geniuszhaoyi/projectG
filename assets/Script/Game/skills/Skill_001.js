var Skill = require("./../Skill");

class Skill_001 extends Skill {
    constructor() {
        super('skill_001',
            'Mana Burn',
            "Burn enemy's 100x mana, deal equal magic damage to enemy. x equans times this skill is casted",
            100,
            0,
            0,
            100,
            0,
            0,
            []
        );
    }
    cast(that) {
        var mana = that.enemy.derivedAttributes[1];
        if(that.x === undefined) that.x = 0;
        that.x += 1;
        var damage = x * 100;
        if (mana <= damage) {
            damage = mana;
            this.enemy.derivedAttributes[1] = 0;
        } else {
            this.enemy.derivedAttributes[1] -= damage;
        }
        that.enemy.derivedAttributes[0] -= damage;        
        return {
            status: 'hit',
            attack: 0,
            magic: 0,
            message: 'Burned ' + damage + ' mana, deal ' + damage + ' damage. ',
            enemyBuffs: [],
        }
    }
}

module.exports = Skill;