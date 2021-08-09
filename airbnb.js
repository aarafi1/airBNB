


var express = require("express");
var app = express();
var bodyParser = require('body-parser');
const Handlebars = require("handlebars");
const { body, validationResult } = require('express-validator');

var HTTP_PORT = process.env.PORT || 3000;


app.use(express.static(__dirname + "/Views"));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/Views/index.html");
   
});

app.get("/room", function(req,res){
    res.sendfile(__dirname + "/Views/roompage.html");
    
});

  app.listen(HTTP_PORT,onHttpStart);
  
  function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}
