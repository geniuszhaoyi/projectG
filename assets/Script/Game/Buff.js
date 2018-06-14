class Buff {
    constructor(id, name, description, strengthAttack, strengthMagic, ttl, attributes) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.strengthAttack = strengthAttack;
        this.strengthMagic = strengthMagic;
        this.ttl = ttl;
        this.attributes = attributes
    }
    cast(that) { 
        return {
            attack: that.damage * this.strengthAttack,
            magic: that.damage * this.strengthMagic,
            derivedAttributes: this.attributes,
        }
    }
}

module.exports = Buff;