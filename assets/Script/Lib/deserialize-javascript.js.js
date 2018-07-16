/*
Author: YI ZHAO
*/

'use strict';

// Generate an internal UID to make the regexp pattern harder to guess.
var UID                 = Math.floor(Math.random() * 0x10000000000).toString(16);
var PLACE_HOLDER_REGEXP = new RegExp('"@__(F|R|D)-' + UID + '-(\\d+)__@"', 'g');

var IS_NATIVE_CODE_REGEXP = /\{\s*\[native code\]\s*\}/g;
var UNSAFE_CHARS_REGEXP   = /[<>\/\u2028\u2029]/g;

// Mapping of unsafe HTML and invalid JavaScript line terminator chars to their
// Unicode char counterparts which are safe to use in JavaScript strings.
var ESCAPED_CHARS = {
    '<'     : '\\u003C',
    '>'     : '\\u003E',
    '/'     : '\\u002F',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};

function escapeUnsafeChars(unsafeChar) {
    return ESCAPED_CHARS[unsafeChar];
}



module.exports = function deserialize(serializedJavascript, base, options) {
    function dfs(obj, base) {
        for(let k in obj) {
            if(typeof(obj[k]) == "object" && typeof(base[k]) == "object") {
                dfs(obj[k], base[k]);
            }else {
                base[k] = obj[k];
            }
        }
    }
    var obj = eval('(' + serializedJavascript + ')');
    dfs(obj, base);
}