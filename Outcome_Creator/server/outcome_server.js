/**
 * 
 */

var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const PORT = 8080;

//Retrieve
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/wiseowl';

//var insert = function(db, callback)	{
//	db.collection('provinces').insertOne({_id : 01, "name" : "nl", "city" : "stj"}, function(err, result)	{
//		assert.equal(null, err);
//		console.log("Inserted Document");
//		callback();
//	});
//};
//
//var find = function(db, callback)	{
//	var curser = db.collection('provinces').find();
//	curser.each(function(err, doc)	{
//		assert.equal(null, err);
//		if(doc != null)	{
//			console.dir(doc);
//		} else	{
//			callback();
//		}
//	});
//};
//
//var update = function(db, callback)	{
//	db.collection('provinces').updateOne({ "name" : "nl" }, { $set: {"city" : "to"}}, function(err, results)	{
//		callback();
//	});
//};
//
//var remove = function(db, callback)	{
//	db.collection('provinces').deleteMany({"name" : "nl"}, function(err, results)	{
//		console.log(results);
//		callback();
//	});
//};
//
//MongoClient.connect(url, function(err, db)	{
//	assert.equal(null, err);
//	find(db, function()	{
//		db.close();
//	});
//});

app.use('/apps', express.static('../apps'));
app.use('/controllers', express.static('../controllers'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use( bodyParser.json() );

app.get('/', function(req, res)	{
	res.sendFile("/Users/jorporte/Documents/HTML5/Curriculum Planning Framework - Drag n' Drop/Outcome_Creator/index.html");
});

app.post('/add', function(req, res){
	console.log("Add Executed:");
	console.log(req.body);
	res.sendStatus(200);
	console.log(req.body.province);
	
//	var insert = function(db, callback) {
//		db.collection('provinces').insertOne({
//			_id : 01,
//			"name" : "nl",
//			"city" : "stj"
//		}, function(err, result) {
//			assert.equal(null, err);
//			console.log("Inserted Document");
//			callback();
//		});
//	};
//	
//	MongoClient.connect(url, function(err, db) {
//		assert.equal(null, err);
//		find(db, function() {
//			db.close();
//		});
//	});

});

app.listen(PORT, function()	{
	console.log("App listening on port: " + PORT);
});