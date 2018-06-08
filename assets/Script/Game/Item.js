class Item {
    constructor(id, name, description, equipPosition, attributes) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.equipPosition = equipPosition;
        this.attributes = attributes;
    }
}

module.exports = Item;