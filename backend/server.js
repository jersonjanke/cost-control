var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');

//Create app express
var app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

//Routes main
require('./app/routes/main.routes.js')(app);

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});