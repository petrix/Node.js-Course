const express = require("express");
 
const app = express();
 
app.set("view engine", "ejs");
 
app.use("/contact", function(request, response){
     
    response.render("001_template", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["example@mycorp.com", "admin@mycorp.com"],
        phone: "+1234567890"
    });
});
app.use("/", function(request, response){     
    response.send("Главная страница");
});

app.listen(3000);