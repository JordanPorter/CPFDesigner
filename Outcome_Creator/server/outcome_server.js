/**
 * 
 */

var server = require('http');
var express = require('express');
var app = express();
const PORT = 8080;

app.get('/', function(req, res)	{
	res.sendFile("/Users/jorporte/Documents/HTML5/Curriculum Planning Framework - Drag n' Drop/Outcome_Creator/index.html");
});

app.listen(PORT, function()	{
	console.log("App listening on port: " + PORT);
});