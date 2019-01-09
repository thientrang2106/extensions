// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('popup.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);

const cheerio = require('cheerio');
const request = require('request');
const nodemailer =  require('nodemailer');
const utf8 = require('utf8');
const express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var port = 8080;
var url = 'https://www.amazon.com/Samsung-Chromebook-Wi-Fi-11-6-Inch-Refurbished/product-reviews/B00M9K7L8S/ref=cm_cr_arp_d_paging_btm_1?ie=UTF8&reviewerType=all_reviews&pageNumber=1';

request(url, function (err, res, body) 
{
    var $ = cheerio.load(body);
    var newestChap = $('span.a-size-base.review-text');
    var c = newestChap.text();
    console.log(c);
})
app.listen(port);
console.log('sever running on' + port);