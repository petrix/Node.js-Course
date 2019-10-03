const express = require("express");
  
const app = express();
  
app.set("view engine", "pug");
 
app.use("/contact", function(request, response){
      
    response.render("003_template", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["example@mycorp.com", "company@mycorp.com"],
        phone: "+1234567890"
    });
}); 
 
app.use("/", function(request, response){
      
    response.send("Главная страница");
});
app.listen(3000);