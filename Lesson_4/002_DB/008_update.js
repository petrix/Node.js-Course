const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
  
let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}]; 
mongoClient.connect(function(err, client){
     
    if(err) return console.log(err);
      
    const db = client.db("usersdb");
    const col = db.collection("users");
    col.insertMany(users, function(err, results){
             
        // Update one document
        col.findOneAndUpdate(
            {age: 21}, // search filter
            { $set: {age: 25}}, // update filter
            {
                returnOriginal: true, // try to comment
            },
            function(err, result){
                 
                console.log(result);
                client.close();
            }
        );

        // Update many
        col.updateMany(
            {name: "Sam"},  //  search filter
            { $set: {name: "Bob"}}, // update filter
            function(err, result){
                      
                console.log(result);
                client.close();
            }
        );

        // Update one
        col.updateOne(
            {name: "Tom"}, 
            { $set: {name: "Tom Junior", age:33}},
            function(err, result){
                      
                console.log(result);
                client.close();
            }
        );
    });
});