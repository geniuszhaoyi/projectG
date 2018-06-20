var Calculator = require("./../Game/Numbers/Calculator");
var Invertory = require("./../Player/Invertory");
var SkillEntity = require('SkillEntity');
var BuffEntity = require('BuffEntity');

class Battle {
    constructor(player, enemy) {
        this.Player = player;
        this.player = new Entity(
            Calculator.getDerivedAttributes(
                player.attributes,
                player.invertory.getItemsInArray().map(item => Invertory.extendItem(item))
            ),
            player.skillset.equippedSkills,
            player.attributes[6],
            player.attributes[7],
        );
        this.enemy = new Entity(
            enemy.derivedAttributes,
            enemy.equippedSkills,
            enemy.derivedAttributes[0],
            enemy.derivedAttributes[1],
        );
        this.player.enemy = this.enemy;
        this.enemy.enemy = this.player;
        this.roundNumber = 0;
        this.autoBattle();
    }
    battleEvents = [];
    autoBattle() {
        for (var round = 0; ; round++) {
            this.pushBattleEvent({ event: 'new round', round: round });
            // cal buff
            this.player.resetDerivedAttributes();
            for (var buffid in this.player.buffs) {
                var buff = this.player.buffs[buffid];
                var res = buff.cast();
                buff.ttl -= 1;
                this.pushBattleEvent({ event: 'buff', target: 'player', buff: buffid, ttl: buff.ttl, res: res });
                if (buff.ttl === 0) delete this.player.buffs[buffid];
            }
            this.enemy.resetDerivedAttributes();
            for (var buffid in this.enemy.buffs) {
                var buff = this.enemy.buffs[buffid];
                var res = buff.cast();
                buff.ttl -= 1;
                this.pushBattleEvent({ event: 'buff', target: 'enemy', buff: buffid, ttl: buff.ttl, res: res });
                if (buff.ttl === 0) delete this.enemy.buffs[buffid];
            }
            // check wins
            if (this.checkWins()) break;
            // cal first attack
            var playerFirst = true;
            if (this.player.derivedAttributes[6] >= this.enemy.derivedAttributes[6]) {
                playerFirst = true;
            } else {
                playerFirst = false;
            }
            // first attack
            if (playerFirst) {
                var ski = Battle.getRndInteger(0, this.player.skills.length);
                var res = this.player.skills[ski].cast();
                this.pushBattleEvent({ event: 'skill', from: 'player', skill: this.player.skills[ski].skill.id, res: res });
            } else {
                var ski = Battle.getRndInteger(0, this.enemy.skills.length);
                var res = this.enemy.skills[ski].cast();
                this.pushBattleEvent({ event: 'skill', from: 'enemy', skill: this.enemy.skills[ski].skill.id, res: res });
            }
            // check wins
            if (this.checkWins()) break;
            // second attack
            if (playerFirst === false) {
                var ski = Battle.getRndInteger(0, this.player.skills.length);
                var res = this.player.skills[ski].cast();
                this.pushBattleEvent({ event: 'skill', from: 'player', skill: this.player.skills[ski].skill.id, res: res });
            } else {
                var ski = Battle.getRndInteger(0, this.enemy.skills.length);
                var res = this.enemy.skills[ski].cast();
                this.pushBattleEvent({ event: 'skill', from: 'enemy', skill: this.enemy.skills[ski].skill.id, res: res });
            }
            // check wins
            if (this.checkWins()) break;
            // end round
        }
        this.apply();
    }
    checkWins() {
        var isdeadPlayer = this.player.hp <= 0;
        var isdeadEnemy = this.enemy.hp <= 0;
        if (isdeadPlayer && isdeadEnemy) {
            this.pushBattleEvent({ event: 'wins', winner: 'draw' });
            return true;
        }
        if (isdeadPlayer) {
            this.pushBattleEvent({ event: 'wins', winner: 'enemy' });
            return true;
        }
        if (isdeadEnemy) {
            this.pushBattleEvent({ event: 'wins', winner: 'player' });
            return true;
        }
        return false;
    }
    pushBattleEvent(event) {
        event.currentStatus = {
            player: this.player.getCurrentEntity(),
            enemy: this.enemy.getCurrentEntity(),
        }
        this.battleEvents.push(event);
    }
    static getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    hasNext() {
        return this.battleEvents.length > 0;
    }
    next() {
        return this.battleEvents.shift();
    }
    applied = 'waiting';
    apply() {
        if (this.applied === 'waiting') {
            this.Player.attributes[6] = this.player.hp;
            this.Player.attributes[7] = this.player.hp;
            this.applied = 'applied';
            return true;
        } else {
            return false;
        }
    }
    discard() {
        if (this.applied === 'waiting') {
            this.applied = 'discarded';
            return true;
        } else {
            return false;
        }
    }
}

class Entity {
    constructor(derivedAttributes, skills, hp, mp) {
        for (var i in derivedAttributes) {
            this.derivedAttributes[i] = derivedAttributes[i];
            this.originDerivedAttributes[i] = derivedAttributes[i];
        }
        skills.map(skill => this.skills.push(new SkillEntity(skill, this)));
        if(this.skills.length === 0) this.skills.push(new SkillEntity('skill_melee', this));
        this.hp = hp;
        this.mp = mp;
    }
    enemy = undefined;
    getMe() {
        return this;
    }
    getEnemy() {
        return this.enemy;
    }
    hp = 0;
    mp = 0;
    derivedAttributes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    originDerivedAttributes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    skills = [];
    buffs = {};
    getCurrentEntity() {
        var buffs = {};
        for(var k in this.buffs) if(this.buffs.hasOwnProperty(k)) {
            buffs[k] = this.buffs[k];
        }
        return {
            hp: this.hp,
            mp: this.mp,
            derivedAttributes: this.derivedAttributes.slice(),
            skills: this.skills.slice(),
            buffs: buffs,
        }
    }
    resetDerivedAttributes() {
        for (var i in this.derivedAttributes) {
            this.derivedAttributes[i] = this.originDerivedAttributes[i];
        }
    }
    applyBuffs(buffs, damage) {
        for (var buff of buffs) {
            if (this.buffs.hasOwnProperty(buff)) {
                delete this.buffs[buff];
            }
            this.buffs[buff] = new BuffEntity(buff, this, damage);
        }
    }
}

module.exports = Battle;