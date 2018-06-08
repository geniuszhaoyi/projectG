class Invertory {
    // items = {"key_001": 2, "pant_001": 1};
    items = {};
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
        return this.items[itemid];
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
        if(hasItem(itemid, 1) === false) {
            return false;
        }
        unequipPosition(Global.Game.items[itemid].equipPosition);
        removeItem(itemid, 1);
        return true;
    }
    unequipItem(item) {
        if(Global.Game.items[itemid].equipPosition === undefined) {
            return false;
        }
        return unequipPosition(Global.Game.items[itemid].equipPosition);
    }
    unequipPosition(position) {
        if(equipments[position] === undefined) {
            return false;
        }
        giveItem(equipments[position], 1);
        delete equipments[position];
        return true;
    }

}

module.exports = Invertory;