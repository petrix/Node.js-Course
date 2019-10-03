const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
mongoClient.connect(function(err, client){
     
    if(err) return console.log(err);
      
    const db = client.db("usersdb");

    // Delete all documents by filter from DB
    db.collection("users").deleteMany({name: "Tom"}, function(err, result){
              
        console.log(result);
        client.close();
    });


    // Delete one document from DB
    db.collection("users").deleteOne({name: "Bob"}, function(err, result){
              
        console.log(result);
        client.close();
    });


    // Drop collection
    db.collection("users").drop(function(err, result){
              
        console.log(result);
        client.close();
    });
});