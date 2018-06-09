var Global = require('./../Global').storage;

class Invertory {
    // items = {"key_001": 2, "pant_001": 1};
    items = {"helmet_001": 1};
    /**
     * Put items to player's inventory. Same items will be merged. 
     * @param {String} itemid 
     * @param {int} quantity 
     */
    giveItem(itemid, quantity) {
        if(quantity <= 0) {
            throw new Error('Parameter [quantity] must be larger than 0, but get ' + quantity);
        }
        if(this.items.hasOwnProperty(itemid) === false) {
            this.items[itemid] = 0;
        }
        this.items[itemid] += quantity;
        return true;
    }
    /**
     * Remove items from player's inventory. If param quantity is larger than existing items, all items will be removed. 
     * @param   {String} itemid 
     * @param   {int} quantity 
     * @return  Quantity of items left. 
     */
    removeItem(itemid, quantity) {
        if(quantity <= 0) {
            throw new Error('Parameter [quantity] must be larger than 0, but get ' + quantity);
        }
        if(this.items.hasOwnProperty(itemid) === false) {
            return false;
        }
        this.items[itemid] -= quantity;
        if(this.items[itemid] <= 0) {
            delete this.items[itemid];
        }
        return true;
    }
    hasItem(itemid, quantity) {
        if(quantity === undefined) {
            return this.items.hasOwnProperty(itemid);
        }else {
            return this.items.hasOwnProperty(itemid) && this.items[itemid] >= quantity;
        }
    }

    equipments = {4: 'pant_001'};
    /**
     * Equip an item. 
     * @param {String} itemid 
     * @return true or false
     */
    equipItem(itemid) {
        if(Global.Game.items[itemid].equipPosition === undefined) {
            return false;
        }
        if(this.hasItem(itemid, 1) === false) {
            return false;
        }
        this.unequipPosition(Global.Game.items[itemid].equipPosition);
        this.removeItem(itemid, 1);
        this.equipments[Global.Game.items[itemid].equipPosition] = itemid;
        return true;
    }
    unequipItem(item) {
        if(Global.Game.items[itemid].equipPosition === undefined) {
            return false;
        }
        return this.unequipPosition(Global.Game.items[itemid].equipPosition);
    }
    unequipPosition(position) {
        if(this.equipments[position] === undefined) {
            return false;
        }
        this.giveItem(this.equipments[position], 1);
        delete this.equipments[position];
        return true;
    }

}

module.exports = Invertory;