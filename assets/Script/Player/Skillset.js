class Skillset {
    skills = [];
    getSkills() {
        return this.skills;
    }
    learnSkill(skillid) {
        if(this.skills.indexOf(skillid) >= 0) {
            return false;
        }
        this.skills.push(skillid);
    }
    forgetSkill(skillid) {
        for(var i in this.skills) {
            if(this.skills[i] === skillid) {
                delete this.skills[i];
            }
        }
    }
    equippedSkills = [];
    equipSkill(skillid) {
        if(this.equippedSkills.length >= 5) {
            this.equippedSkills.splice(0, 1);
        }
        this.equippedSkills.push(skillid);
        return true;
    }
    unequipSkill(skillid) { 
        for(var i in this.equippedSkills) {
            if(this.equippedSkills[i] === skillid) {
                delete this.equippedSkills[i];
            }
        }
    }
}

module.exports = Skillset;