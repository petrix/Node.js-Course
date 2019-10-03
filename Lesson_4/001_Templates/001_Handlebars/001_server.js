// npm install hbs --save

const express = require("express");
 
const app = express();
 
app.set("view engine", "hbs");
app.set("views", "templates"); // установка пути к представлениям
 
app.use("/contact", function(request, response){
    response.render("001_template.hbs");
});

app.use("/", function(request, response){
     
    response.send("Главная страница");
});

app.listen(3000);