class Player {
    npcStatus = {}
    getNpcStatus(key) {
        return this.npcStatus[key];
    }
    setNpcStatus(key, value) {
        this.npcStatus[key] = value;
    }
    items = {
        // "key_001": 1,
    }
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
    attributes = {
        level: 0,
        constitution: 100,
        strength: 0,
        agility: 0,
        mind: 0,
        mentality: 0,
        currentHealth: 1000,
        currentMana: 0,
    };
    currentNode = "city_001";
    visibleNode = {"city_001": true};
}

module.exports = Player;