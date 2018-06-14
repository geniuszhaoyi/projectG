
class Calculator {
    /**
     * 
     * @param {Object} b Basic Attributes
     * @param {[Invertory.Item]} items Extended items
     */
    static getDerivedAttributes(b, items) {
        var res = [
            (b[1] * 10 + b[2]) * (b[0] * 0.015 + 1),
            (b[5] * 8 + b[4]) * (b[0] * 0.01 + 1),
            (b[2] * 5 + b[1]) * (b[0] * 0.008 + 1),
            (b[4] * 4 + b[5]) * (b[0] * 0.01 + 1),
            (b[1] * 1.5 + b[2] * 1.5 + b[3]) * (b[0] * 0.006 + 1),
            (b[4] * 2 + b[3]) * (b[0] * 0.006 + 1),
            (b[3] * 1.5),
            (b[3] * 1.2),
            (b[3] * 0.8),
        ];
        for(var item of items) if(item.equipped >= 0 && item.attributes !== undefined){
            if(item.attributes === undefined) {
                console.log('Warning: You equipped an non-equippable item. [Calculator line 22]');
            }
            for(var i in res) {
                res[i] += item.attributes[i];
            }
        }
        return res;
    }
}

module.exports = Calculator;