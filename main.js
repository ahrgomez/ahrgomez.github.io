var express = require('express');
var cons = require('consolidate');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + '/public'));

app.engine('html', cons.swig);
app.set('view engine', 'html');

app.set('port', process.env.PORT || 3000);

app.get('/', require('./routes').index);

app.listen(app.get('port'), function() { console.log('RUNNING!'); });
