var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
var routes = require('./routes');
routes(app);
var port = process.env.PORT || 8080;
app.listen(port);
