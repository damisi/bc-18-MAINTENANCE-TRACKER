var express = require('express');
var app = express();

// app.set = ('view engine','ejs');

// app.use(express.static('public'));
app.use('/', express.static(__dirname + '/public', { index: 'loginpage.html' }));


// app.get('/history/:store', function(req, res){
// 	res.render('history',{store: req.params.store})
// });
var port = process.env.PORT || 3000;
app.listen(port, function(){console.log('listening')});