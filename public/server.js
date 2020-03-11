/*
 * //////////////////////////////////////////////
 * │                                            │
 * │ 		  YoRHa Server System ver 0.0.1        	│
 * │					'The Fortress Of Lies'						│
 * │     Run npm install -g npm to update!      │
 * │                                            │
 * //////////////////////////////////////////////
 */
var NieR = require("./NieR.js");
var http = require("http");
const fs = require('fs');
var port = function() {
	if(process.env.PORT != undefined) {
		return 9001;//processs.env.PORT;
	}
	else {
		return 9001;
	}
}
console.log('PORT: ',port());
var files = {
	'idx' : null,
	'css' : null,
	'jsf' : null,
	'fnf' : null
}
function sendFile(file,res) {
	var data = 'null';
	if(file === '/') {file = '/index.html';}
	switch(file) {
		case '/index.html' : {
			res.setHeader('Content-type','text/html');
			res.setStatus = 200;
			data = files.idx;
			console.log(data);
		} break;
		case '/post.js' : {
			res.setHeader('Content-type','text/javascript');
			res.setStatus = 200;
			data = files.jsf;
			console.log(data);
		} break;
		case '/style.css' : {
			res.setHeader('Content-type','text/css');
			res.setStatus = 200;
			data = files.css;
			console.log(data);
		} break;
		case '/404.html' : {
			res.setHeader('Content-type','text/html');
			res.setStatus = 404;
			data = files.fnf;
			console.log(data);
		} break;
		default : {
			res.setHeader('Content-type','text/html');
			res.setStatus = 404;
			data = files.fnf;
			console.log(data);
		} break;
	}
	res.write(data,function(err) {res.end();});
}
function loadFiles() {
	fs.readFile("public/index.html",function(err,data) {
		console.log("public/index.html...");
		if(err) {
			console.log("404:file not found!");
		}
		else {
			console.log("loaded!");
			files.idx = data.toString();
		}
	});
	fs.readFile("public/style.css",function(err,data) {
		console.log("public/style.css...");
		if(err) {
			console.log("404:file not found!");
		}
		else {
			console.log("loaded!");
			files.css = data.toString();
		}
	});
	fs.readFile("public/post.js",function(err,data) {
		console.log("public/post.js...");
		if(err) {
			console.log("404:file not found!");
		}
		else {
			console.log("loaded!");
			files.jsf = data.toString();
		}
	});
	fs.readFile("public/404.html",function(err,data) {
		console.log("public/404.html...");
		if(err) {
			console.log("404:file not found!");
		}
		else {
			console.log("loaded!");
			files.fnf = data.toString();
		}
	});
}
function YoRHa(req,res) {
	console.log("== YoRHa req: Recieved Request");
	console.log(" -- YoRHa req: method	: ",req.method);
	console.log(" -- YoRHa req: url			: ",req.url);
	console.log(" -- YoRHa req: headers	: ",req.headers);
	sendFile(req.url,res);
	console.log("== YoRHa req: End Request");
}
loadFiles();
var FortressOfLies = http.createServer(YoRHa);
FortressOfLies.listen(port,function() {
	console.log("== YoRHa: Active on port ",port);
});
