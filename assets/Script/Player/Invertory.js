var Global = require('./../Global').storage;

class Invertory {
    // items = {"key_001": 2, "pant_001": 1};
    currentId = 2;
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
     * Extend item with information in Game.items
     * @param {Invertory.Item} item 
     */
    static extendItem(item) {
        var res = [];
        var gameitem = Global.Game.items[item.itemid];
        for (var key in gameitem) if (gameitem.hasOwnProperty(key)) {
            res[key] = gameitem[key];
        }
        for (var key in item) if (item.hasOwnProperty(key)) {
            res[key] = item[key];
        }
        return res;
    }

    /**
     * Get a plain array view of items. 
     * @return {[{id: int, itemid: string, quantity: int, [equipped: int]}]}
     */
    getItemsInArray() {
        var res = [];
        for (var id in this.items) if (this.items.hasOwnProperty(id)) {
            var item = this.items[id];
            item.id = id;
            res.push(item);
        }
        return res;
    }
    getItemById(id) {
        if(id === undefined) {
            throw new Error('parameter [id] is undefined');
        }
        if(this.items.hasOwnProperty(id) === false) {
            throw new Error('There is no item with id ' + id);
        }
        return this.items[id];
    }
    /**
     * Get items by itemid
     * Time Complexity: O(items.length)
     * @param {String} itemid 
     */
    getItemsByItemid(itemid) {
        var res = [];
        for (var id in this.items) if (this.items.hasOwnProperty(id)) {
            var item = this.items[id];
            if (item.itemid === itemid) {
                res.push(item);
            }
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
        for (var item of this.getItemsByItemid(itemid)) {
            item.quantity += quantity;
            return true;
        }
        this.items[this.currentId] = {
            itemid: itemid,
            quantity: quantity,
        };
        this.currentId += 1;
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
        for (var item of this.getItemsByItemid(itemid)) {
            if (item.quantity > quantity) {
                item.quantity -= quantity;
                return true;
            } else {
                quantity -= item.quantity;
                delete this.items[id];
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
        for (var item of this.getItemsByItemid(itemid)) {
            quantity -= item.quantity;
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
        if (position === undefined) {
            position = Global.Game.items[this.items[id].itemid].equipPosition;
            if (position === undefined) {
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
    switchEquipId(id) {
        var item = this.getItemById(id);
        if(item.equipped >= 0) {
            this.unequipId(id);
        }else {
            this.equipId(id);
        }
    }
    unequipPosition(position) {
        for (var id in this.items) if(this.items.hasOwnProperty(id)) {
            var item = this.items[id];
            if (item.equipped === position) {
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
        for (var item of this.getItemsByItemid(itemid)) {
            this.equipId(id, Global.Game.items[itemid].equipPosition);
            return true;
        }
        return false;
    }
    /**
     * Unequip all items with itemid. 
     * Time Complexity: O(items.length)
     * @param {String} itemid 
     */
    unequipItem(itemid) {
        for (var item of this.getItemsByItemid(itemid)) {
            this.unequipId(id);
        }
    }

}

module.exports = Invertory;