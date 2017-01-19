var express = require('express');
var app = express();

// app.set = ('view engine','ejs');

// app.use(express.static('public'));
app.use('/', express.static(__dirname + '/public'));

app.get("/", function(req, res, next){
	res.sendStatus(200);
})
// app.use('/maintenance issues', express.static(__dirname + '/public', { index: 'index.html' }));


// app.get('/history/:store', function(req, res){
// 	res.render('history',{store: req.params.store})
// });
// app.set('port',process.env.PORT || 3000);
var port = process.env.PORT || 3000

app.listen(port,function() {
    console.log('Maintenance Tracker running. To terminate press Ctrl + C.');
});