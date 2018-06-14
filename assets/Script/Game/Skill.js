class Skill {
    constructor(id, name, description, select, strengthAttack, strengthMagic, hit, critical, buffHit, buffList) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.select = select;
        this.strengthAttack = strengthAttack;
        this.strengthMagic = strengthMagic;
        this.hit = hit;
        this.critical = critical;
        this.buffHit = buffHit;
        this.buffList = buffList;
    }
    cast(that) {
        if(Math.random() * 100 < this.select) {
            return this.castSkill(that);
        }else {
            return this.castBasic(that);
        }
    }
    castSkill(that) {
        var hit = 60 + (that.me.derivedAttributes[7] - that.enemy.derivedAttributes[7] + this.hit) / 10;
        if (Math.random() * 100 < hit) {
            var critical = 10 + (that.me.derivedAttributes[8] + this.critical) / 10;
            var isCritical = (Math.random() * 100 < critical);

            var attack = that.me.derivedAttributes[2] * this.strengthAttack * ((Math.random() * 2 - 1) * 0.1 + 1);
            attack += (isCritical ? that.me.derivedAttributes[2] * this.strengthAttack * 1.0 : 0);
            attack -= that.enemy.derivedAttributes[4];
            if(attack < 0) attack = 0;
            if(that.me.derivedAttributes[2] * this.strengthAttack > 0 && attack < 1) attack = 1;
            var magic = that.me.derivedAttributes[3] * this.strengthMagic * ((Math.random() * 2 - 1) * 0.2 + 1);
            magic += (isCritical ? that.me.derivedAttributes[3] * this.strengthMagic * 1.2 : 0);
            magic -= that.enemy.derivedAttributes[5];
            if(magic < 0) magic = 0;
            if(that.me.derivedAttributes[3] * this.strengthMagic > 0 && magic < 1) magic = 1;

            var buffList = [];
            if (Math.random() * 100 < this.buffHit) {
                buffList = this.buffList;
            }

            return {
                status: (isCritical ? 'critical': 'hit'),
                attack: attack,
                magic: magic,
                enemyBuffs: buffList,
            }
        }else {
            return {
                status: 'missed',
            }   
        }
    }
    castBasic(that) {
        var hit = 60 + (that.me.derivedAttributes[7] - that.enemy.derivedAttributes[7]) / 10;
        if (Math.random() * 100 < hit) {
            var critical = 10 + (that.me.derivedAttributes[8] + this.critical) / 10;
            var isCritical = (Math.random() * 100 < critical);

            var attack = that.me.derivedAttributes[2] * ((Math.random() * 2 - 1) * 0.1 + 1);
            attack += (isCritical ? that.me.derivedAttributes[2] * 0.6 : 0);
            attack -= that.enemy.derivedAttributes[4];
            if(attack < 0) attack = 0;
            if(that.me.derivedAttributes[2] > 0 && attack < 1) attack = 1;
            var magic = 0

            var buffList = [];
            if (Math.random() * 100 < this.buffHit) {
                buffList = this.buffList;
            }

            return {
                status: (isCritical ? 'critical': 'hit'),
                attack: attack,
                magic: magic,
                enemyBuffs: buffList,
            }
        }else {
            return {
                status: 'missed',
            }   
        }
    }
}

module.exports = Skill;