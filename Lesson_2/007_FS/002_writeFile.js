const fs = require('fs');
const utils = require('util');

user = {
    fname : "Ivan",
    lname : "Ivanov",
    age : 30,
    position : "developer"
}
console.log('File writing...');
fs.writeFile('text.txt', utils.format('%j', user), function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('File was wrote!');
});

