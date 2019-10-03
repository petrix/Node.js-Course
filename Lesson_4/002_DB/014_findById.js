const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true });
 
const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);

const id = "588a0f8c9151d23ce47bf98d";
User.findById(id, function(err, doc){
    mongoose.disconnect();
     
    if(err) return console.log(err);
     
    console.log(doc);
});