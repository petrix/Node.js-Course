const body_parser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();
const port = 8080;

router.route("/")
    .get(function (req, res) {
        res.send("List of products. GET method.");
        res.send(body_parser.json());
        console.log(`${body_parser.json}`);
    })
    .post(function (req, res) {
        res.send("Product created. POST method.");
    });

router.route("/:id")
    .get(function (req, res) {
        res.send(`Product :  ${req.params.id}`);
    });

router.route("/:id/:parameters")
    .get(function (req, res) {
        res.send(`Product :  ${req.params['id']}`+`<br>`+`Params :  ${req.params['parameters']}`);
        // res.send(`Params :  ${req.params['parameters']}`);
    });





app.use('/', router);


// app.get('/', function(req, res) { 
//     res.send("Главная страница");
// }); 


app.listen(port, function () {
    console.log('app running on port ' + port);
});