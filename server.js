var express = require("express");
var app = express();
var mongoose = require('mongoose');
var schema = mongoose.schema;
const {body, validationResult} = require('express-validator');

var HTTP_PORT = process.env.PORT || 5000;

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}


app.use(express.static(__dirname+ "/views"));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/views/main.html");
});

app.get("/room", function(req,res){
    res.sendfile(__dirname + "/views/room.html");
});

app.get("/signup", function(req,res){
    res.sendfile(__dirname+ "/signup.html");
});



app.post('/sign-up', [

    body('e-mail').isEmail(),
    body('password').isLength({ min: 5 })
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    User.create({
      username: req.body.email,
      password: req.body.password
    }).then(user => res.json(user));
  });




app.listen(HTTP_PORT, onHttpStart);



