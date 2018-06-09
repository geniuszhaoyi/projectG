var Global = require('./../../Global').storage;

class Calculator {
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
        for(var j in items) {
            var item = Global.Game.items[items[j]].attributes;
            for(var i in res) {
                res[i] += item[i];
            }
        }
        return res;
    }
}

module.exports = Calculator;