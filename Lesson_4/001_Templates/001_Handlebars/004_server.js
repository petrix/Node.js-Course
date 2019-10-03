const express = require("express");
const hbs = require("hbs");
const app = express();
  
app.set("view engine", "hbs");
// registerPartials - устанавливает каталог, где располагаются частичные представления.
hbs.registerPartials(__dirname + "/views/partials");
 
app.use("/contact", function(request, response){
      
    response.render("004_template", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["example@mycorp.com", "admin@mycorp.com"],
        phone: "+1234567890"
    });
}); 
 
app.use("/", function(request, response){      
    response.render("home.hbs");
});

app.listen(3000);