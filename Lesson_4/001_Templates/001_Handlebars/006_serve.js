const express = require("express");
const hbs = require("hbs");
 
const app = express();
 
hbs.registerHelper("getTime", function(){
     
    var myDate = new Date();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    return "Текущее время: " + hour + ":" + minute + ":" + second;
});
 
app.set("view engine", "hbs");
 
app.get("/", function(request, response){
     
    response.render("home.hbs");
});
 
app.listen(3000);