const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
// connection
mongoose.connect('mongodb://localhost:27017/usersdb', { useNewUrlParser: true });
  
// Initialize schema
const userScheme = new Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max:100
    }
});


const User = mongoose.model('User', userScheme);

// 1.
const user = new User({name: 'Tom', age: 34});

// 2.
User.create({name: 'Tom', age: 34}, function(err, doc){
    mongoose.disconnect();
      
    if(err) return console.log(err);
      
    console.log('User object saved: ', doc);
});