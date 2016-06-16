var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Promise = require('promise');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use('/', express.static(__dirname + '/public'));

var tracker = {};
var count;
io.on('connection', function(socket) {

    console.log("a user connected");
    for (var i = 100; i > 0; i--) {
        retrieve().then(split);
    }

    tracker = {};
});

var retrieve = function() {
    var x = new Promise(function(resolve, reject) {

    });
    return x;
};




var retrieve = function() {
    var x = new Promise(function(resolve, reject) {

        var url = 'http://www.classnamer.com/';

        request(url, function(error, response, html) {

            if (!error) {
                var $ = cheerio.load(html);

                var classNamer;
                var json = {
                    class: ""
                };
                var data = $('#classname').filter(function() {
                    y = $(this).text();
                    resolve(y);
                });
            }
        });
    });
    return x;
};

var split = function(data) {
    var string = "";

    var splitData = data.split(/(?=[A-Z])/);

    list(splitData);
};

var list = function(data) {
    for (var i = 0; i < data.length; i++) {
        var word = data[i];

        if (word in tracker) {
            tracker[word] += 1;
            io.emit('update', {
                word: word,
                tracker: tracker
            });
        } else {
            tracker[word] = 1;
            io.emit('new', {
                word: word,
                tracker: tracker
            });
        }
    }


};


server.listen(3000);
console.log('port 3000 started');

exports = module.exports = app;
