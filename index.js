// var http = require('http');
// var fs = require('fs');
// var request = require('request');

// var url = 'https://www.amazon.com';
// http.createServer(function (req, res) {
//   fs.readFile('popup.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     request(url, function (err, res, body) 
// 	{
// 	    console.log(body);
// 	    //res.render({html: body});
// 	})
    
//     res.end();
//   });
// }).listen(8080);
var express = require("express");
var app = express();
var request = require("request");
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views", "./views");
app.listen(3000);
app.get("/", function(req, res){
	request("https://www.amazon.com", function(error, response, body){
		if(error){
			console.log(error);
		}else{
			//console.log(body);
			response.setEncoding('utf8');
			res.render("trangchu",{html:body});
		}
	});
	
});




