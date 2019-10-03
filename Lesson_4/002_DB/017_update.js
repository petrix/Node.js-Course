const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true });
 
const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);
 
User.updateOne({name: "Tom"}, {name: "Tom Smith"}, function(err, result){
     
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log(result);
});

const id = "588b2d6fc7d95503980ecf99";
// Try to pass third parameter as object
User.findByIdAndUpdate(id, {name: "Sam", age: 25}, function(err, user){
     
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log("Обновленный объект", user);
});