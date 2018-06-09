var Global = require('./../Global').storage;

class Invertory {
    // items = {"key_001": 2, "pant_001": 1};
    currentId = 0;
    items = {
        0: {
            itemid: "helmet_001",
            quantity: 1,
        },
        1: {
            itemid: "pant_001",
            quantity: 1,
            equipped: 4,
        }
    };
    // items =[{
    //     id:"helmet_001",
    //     quantity:1,
    // },{
    //     id:"helmet_001",
    //     quantity:1,
    // },{
    //     id:"helmet_001",
    //     quantity:1,
    // },{
    //     id:"weapon_001",
    //     quantity:1,
    // },{
    //     id:"helmet_001",
    //     quantity:1,
    // },
    // ];

    /**
     * Get a plain array view of items. 
     * @return {[{itemid: string, quantity: int, [equipped: int]}]}
     */
    getItemsInArray() {
        var res = [];
        for (var id in this.items) {
            var item = this.items[id];
            res.push(item);
        }
        return res;
    }
    /**
     * Put items to player's inventory. Same items will be merged. 
     * Time Complexity: O(items.length)
     * @param {String} itemid 
     * @param {int} quantity 
     */
    giveItem(itemid, quantity) {
        if (quantity <= 0) {
            throw new Error('Parameter [quantity] must be larger than 0, but get ' + quantity);
        }
        for (var id in this.items) {
            var item = this.items[id];
            if (item.itemid === itemid) {
                item.quantity += quantity;
                return true;
            }
        }
        this.items.push({
            id: currentId,
            itemid: itemid,
            quantity: quantity,
        });
        currentId += 1;
        return true;
    }
    /**
     * Remove items from player's inventory. If param quantity is larger than existing items, all items will be removed. 
     * Time Complexity: O(items.length)
     * @param   {String} itemid 
     * @param   {int} quantity 
     * @return  Quantity of items left. 
     */
    removeItem(itemid, quantity) {
        if (quantity <= 0) {
            throw new Error('Parameter [quantity] must be larger than 0, but get ' + quantity);
        }
        for (var id in this.items) {
            var item = this.items[id];
            if (item.itemid === itemid) {
                if (item.quantity > quantity) {
                    item.quantity -= quantity;
                    return true;
                } else {
                    quantity -= item.quantity;
                    delete this.items[id];
                }
            }
        }
        return quantity === 0;
    }
    hasItem(itemid, quantity) {
        if (quantity <= 0) {
            throw new Error('Parameter [quantity] must be larger than 0, but get ' + quantity);
        }
        if (quantity === undefined) {
            quantity = 1;
        }
        for (var id in this.items) {
            var item = this.items[id];
            if (item.itemid === itemid) {
                quantity -= item.quantity;
            }
        }
        return quantity <= 0;
    }

    /**
     * Equip an item to a position. Will unequip all items previously in this position. 
     * Time Complexity: O(items.length)
     * @param {int} id 
     * @param {int} position optional
     */
    equipId(id, position) {
        if(position === undefined) {
            position = Global.Game.items[this.items[id].itemid].equipPosition;
            if(position === undefined) {
                return false;
            }
        }
        this.unequipPosition(position);
        this.items[id].equipped = position;
        return true;
    }
    unequipId(id) {
        if (this.items[id].equipped >= 0) {
            this.items[id].equipped = undefined;
            return true;
        }
        return false;
    }
    unequipPosition(position) {
        for (var id in this.items) {
            var item = this.items[id];
            if(item.equipped === position) {
                this.unequipId(id);
            }
        }
    }
    /**
     * Equip an item. Note: Will equip the first item that appears and with itemid. 
     * Time Complexity: O(items.length)
     * @param {String} itemid 
     * @return true or false
     */
    equipItem(itemid) {
        if (Global.Game.items[itemid].equipPosition === undefined) {
            return false;
        }
        for (var id in this.items) {
            var item = this.items[id];
            if(item.itemid === itemid) {
                this.equipId(id, Global.Game.items[itemid].equipPosition);
                return true;
            }
        }
        return false;
    }
    /**
     * Unequip all items with itemid. 
     * Time Complexity: O(items.length)
     * @param {String} itemid 
     */
    unequipItem(itemid) {
        for (var id in this.items) {
            var item = this.items[id];
            if(item.itemid === itemid) {
                this.unequipId(id);
            }
        }
    }

}

module.exports = Invertory;