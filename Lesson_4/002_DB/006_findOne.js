const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
mongoClient.connect(function(err, client){
      
 
    if(err) return console.log(err);
      
    const db = client.db("usersdb");
    db.collection("users").findOne(function(err, doc){
              
        console.log(doc);
        client.close();
    });
});