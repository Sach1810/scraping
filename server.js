var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Promise = require('promise');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/display');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(express.static('node_modules'));

// var promise = new Promise(function (resolve, reject) {
//   request('http://www.google.com', function (err, res) {
//     if (err) reject(err);
//     else resolve(res);
//   });
// });
// promise.then(function(z){console.log(z);});


app.get('/scrape', function(req, res){
    retrieve().then(split);
});

var retrieve = function() {
    var x = new Promise(function (resolve, reject){

    var url = 'http://www.classnamer.com/';

    request(url, function(error, response, html){

        if(!error){
            var $ = cheerio.load(html);

            var classNamer;
            var json = { class : ""};
            var data = $('#classname').filter(function(){
            y = $(this).text();

            resolve(y);

            console.log("1 " + y);
            });
        }
    });
});
    return x;
};

//     var url = 'http://www.classnamer.com/';
//     request(url, function(error, response, html){
//
//         if(!error){
//             var $ = cheerio.load(html);
//
//             var classNamer;
//             var json = { class : ""};
//             var data = $('#classname').filter(function(){
//             x = $(this).text();
//             console.log("1 " + x);
//             });
//         }
//     });
//     console.log("2" + x);
//     return x;
// };



var split = function(data) {
    var string = "";
    console.log(data);
    var splitData = data.split(/(?=[A-Z])/);
    console.log(splitData);
    return splitData;
};




//     for (var i = 0; i < splitData.length; i++) {
//         string += splitData[i] + " ";
//     }
//
//     console.log(string);
//     return string;
// };

app.listen('3000');

console.log('port 3000 started');

exports = module.exports = app;
