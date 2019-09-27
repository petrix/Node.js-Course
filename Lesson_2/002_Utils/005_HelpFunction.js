var utils = require('util');

var obj = { name: "Some object" };
var numb = 10;
var str = "Some string";
var und = null;
var arr = [1,2,3,4,5];

// Deprecated
console.log('arr is array:', utils.isArray(arr), Array.isArray(arr));
console.log('obj is object:', utils.isObject(obj), typeof obj === 'object');
console.log('numb is number:', utils.isNumber(numb), typeof numb === 'number');
console.log('str is string:', utils.isString(str), typeof str === 'string');
console.log('und is NULL:', utils.isNull(und), und === null);
console.log('und is function:', utils.isFunction(und), typeof und === 'function');