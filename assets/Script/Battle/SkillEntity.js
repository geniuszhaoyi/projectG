var Global = require('./../Global').storage;

class SkillEntity {
    constructor(skill, entity) {
        this.skill = Global.Game.skills[skill];
        this.entity = entity;
    }
    get me() {
        return this.entity.getMe();
    }
    get enemy() {
        return this.entity.getEnemy();
    }
    cast() {
        var res = this.skill.cast(this);
        var damage = 0;
        if(res.attack) damage += res.attack;
        if(res.magic) damage += res.magic;
        this.enemy.hp -= damage;
        if(res.selfBuffs) this.me.applyBuffs(res.selfBuffs, damage);
        if(res.enemyBuffs) this.enemy.applyBuffs(res.enemyBuffs, damage);
        return res;
    }
}

module.exports = SkillEntity;