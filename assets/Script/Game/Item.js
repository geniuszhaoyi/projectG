class Item {
    constructor(id, name, description, image, equipPosition, attributes) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.equipPosition = equipPosition;
        this.attributes = attributes;
    }
}

module.exports = Item;