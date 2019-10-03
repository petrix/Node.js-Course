// npm install mongodb
	
const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
mongoClient.connect(function(err, client){
 
    if(err){
        return console.log(err);
    }

    console.log('Connection established.');
    // Some actions with DB

    // Close connection
    client.close();
});