const utils = require('util');

const user = {
    name : "Ivan",
    age : 25,
    salary : 10000,
    bonus: 15
}

const objInfo = utils.inspect(user);

console.log(objInfo); 

const point = {
    name : "A",
    x : 10,
    y : 20,
    inspect : function(){
        return utils.format('Point %s[%d:%d]', this.name, this.x, this.y);
    }
}

console.log(point);