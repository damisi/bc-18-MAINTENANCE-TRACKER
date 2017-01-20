var express = require('express');
var app = express();

var path = __dirname + '/public';

// app.set = ('view engine','ejs');

// app.use(express.static('public'));
app.use('/', express.static(__dirname + '/public'));

app.get("/", function(req, res, next){
	res.sendStatus(200);
})

app.get("/maintenanceLog",function(req,res){
  res.sendFile(path + "/issuesPage.html");
});

app.get("/about",function(req,res){
  res.sendFile("about.html");
});


var port = process.env.PORT || 3000

app.listen(port,function() {
    console.log('Maintenance Tracker running. To terminate press Ctrl + C.');
});