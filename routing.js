var express = require('express');
var app = express();

// app.set = ('view engine','ejs');

app.use(express.static('public'))

// app.get('/history/:store', function(req, res){
// 	res.render('history',{store: req.params.store})
// });


app.listen(3000);