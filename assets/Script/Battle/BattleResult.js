
class BattleResult {
    static getSample() {
        var res = new BattleResult();
        res.steps = [
            {
                round: 0,
                type: 'buff',
                buffid: 'buff_001',
                target: 0,
                hp: -300,
                mp: 100,
                postStatus: {
                    0: {
                        attributes: [700, 1100, 0, 0, 0, 0, 0, 0],
                        buffs: [{buffid: 'buff_001', ttl: 10}],
                        skills: ['skill_001'],
                    },
                    1: {
                        attributes: [10000, 1000, 2000, 0, 0, 0, 0, 0, 0],
                        buffs: [],
                        skills: [],
                    }
                }
            }, {
                round: 0,
                type: 'attack',
                from: 0,
                to: 1,
                chosenSkill: 'skill_001',
                willCast: true,
                castResult: {
                    status: 'missed',
                },
                postStatus: {
                    0: {
                        attributes: [700, 1100, 0, 0, 0, 0, 0, 0],
                        buffs: [{buffid: 'buff_001', ttl: 10}],
                        skills: ['skill_001'],
                    },
                    1: {
                        attributes: [10000, 1000, 2000, 0, 0, 0, 0, 0, 0],
                        buffs: [],
                        skills: [],
                    }
                }
            }, {
                rount: 0,
                type: 'attack',
                from: 1,
                to: 0,
                chosenSkill: undefined,
                castResult: {
                    status: 'critical',
                    attack: 3598,
                    magin: undefined,
                    selfbuffs: undefined,
                    enemybuffs: ['buff_001'],
                },
                postStatus: {
                    0: {
                        attributes: [700, 1100, 0, 0, 0, 0, 0, 0],
                        buffs: [{buffid: 'buff_001', ttl: 10}, {buffid: 'buff_001', ttl: 11}],
                        skills: ['skill_001'],
                    },
                    1: {
                        attributes: [10000, 1000, 2000, 0, 0, 0, 0, 0, 0],
                        buffs: [],
                        skills: [],
                    }
                }
            }
        ]
    }
    steps = [];
    apply() {

    }
    discard() {

    }
    getSteps() {
        return this.steps;
    }
    getStep(i) {
        return this.steps[i];        
    }
    get length() {
        return this.steps.length;
    }
    set length(l) {}
}

module.exports = BattleResult;