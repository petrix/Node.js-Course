const fileReader = require('./readFile.js');
const reader = new fileReader.Reader();

reader.readDataFromFile('file.js', function(responce){
    console.log(responce);
});
