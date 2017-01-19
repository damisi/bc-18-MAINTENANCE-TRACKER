var express = require('express');
var app = express();

// app.set = ('view engine','ejs');

// app.use(express.static('public'));
app.use('/', express.static(__dirname + '/public', { index: 'loginpage.html' }));
// app.use('/maintenance issues', express.static(__dirname + '/public', { index: 'index.html' }));


// app.get('/history/:store', function(req, res){
// 	res.render('history',{store: req.params.store})
// });
app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'),function() {
    console.log('Maintenance Tracker running. To terminate press Ctrl + C.');
});