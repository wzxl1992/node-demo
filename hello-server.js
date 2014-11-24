/*
    hello-server.js

    The most basic web server you can write using Node.js
*/

'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello');

});

app.get('/foo', function(req, res) {
   res.send('You requested foo!');
});

app.post('/foo', function(req, res){

});

app.listen(8080, function() {
    consolelog('listening at http://localhost:8080');
});