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
            message: '燃烧了<color=#FF1D2B>' + damage + '</color>点魔法，造成了<color=#FF1D2B>' + damage + '</color>点伤害',
            enemyBuffs: [],
        }
    }
}

module.exports = Skill_001;