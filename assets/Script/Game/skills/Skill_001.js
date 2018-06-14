var Skill = require("./../Skill");

class Skill_001 extends Skill {
    constructor(id) {
        super(id,
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
        var mana = that.enemy.mp;
        if(that.x === undefined) that.x = 0;
        that.x += 1;
        var damage = that.x * 100;
        if (mana <= damage) {
            damage = mana;
            that.enemy.mp = 0;
        } else {
            that.enemy.mp -= damage;
        }
        that.enemy.hp -= damage;        
        return {
            status: 'hit',
            attack: 0,
            magic: 0,
            specialEffect: {
                type: 'burn mana and cause damage',
                manaBurned: damage,
                attack: damage,
            },
            enemyBuffs: [],
        }
    }
}

module.exports = Skill_001;