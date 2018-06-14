var Global = require('./../Global').storage;

class SkillEntity {
    constructor(buff, entity, damage) {
        this.buff = Global.Game.buffs[buff];
        this.ttl = this.buff.ttl;
        this.entity = entity;
        this.damage = damage;
    }
    get me() {
        return this.entity.getMe();
    }
    get enemy() {
        return this.entity.getEnemy();
    }
    cast() {
        var res = this.buff.cast(this);
        if(res.attack) this.me.hp -= res.attack;
        if(res.magic) this.me.hp -= res.magic;
        if(res.derivedAttributes) {
            for(var i in res.derivedAttributes) {
                this.me.derivedAttributes[i] += res.derivedAttributes[i];
            }
        }
        return res;
    }
}

module.exports = SkillEntity;