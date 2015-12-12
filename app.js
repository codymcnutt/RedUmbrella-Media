// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var controller = require('./controllers/controller.js');
mongoose.connect('mongodb://localhost/redUmbrella');

var app = express();


// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
// var controller = require('./controllers/controller')

app.get('/', function(req, res){
  res.sendFile("/html/home.html", {root : './public'})
});
// app.post('/api/savedWishes', controller.createWish)

// app.get('/api/getWishes', controller.getWishes)

var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})