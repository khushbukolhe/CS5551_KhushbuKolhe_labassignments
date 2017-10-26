/**
 * Created by Khushbu Kolhe on 10/25/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var assert = require('assert');
var bodyParser = require("body-parser");
var express = require('express');
var cors = require('cors');
var app = express();
var url = 'mongodb://root:secure@ds125335.mlab.com:25335/khushbudb';
//var url = 'mongodb://marmik:2621@ds051923.mlab.com:51923/demo';
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/register', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        insertDocument(db, req.body, function() {
            res.write("Successfully inserted");
            res.end();
        });
    });
})
var insertDocument = function(db, data, callback) {
    db.collection('khushbutable').insertOne( data, function(err, result) {
        if(err)
        {
            res.write("Registration Failed, Error While Registering");
            res.end();
        }
        console.log("Inserted a document into the asedemo collection.");
        callback();
    });
};
var server = app.listen(8081,function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

//For Getting Data
app.post('/getData', function (req, res) {
    var resultArray = [];

    MongoClient.connect(url, function(err, db) {
        var curs = db.collection('khushbutable').find();
        curs.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        },function () {
            db.close();
            console.log('ITEMS is : '+ JSON.stringify(resultArray));
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(resultArray));
            console.log('Wrote data');
        });

    });
})

//For Deleting Data
app.post('/deleteData', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        deleteOperation(db, req.body, function() {
            console.log("id is" + req.body.id)
            res.write("Successfully deleted");
            res.end();
        });
    });
})
var deleteOperation = function(db, data, callback) {

    var id= data.id;
    db.collection('khushbutable').deleteOne( {"_id": ObjectId(id)}, function(err, result) {
        if(err)
        {
            res.write("Registration Failed, Error While Registering");
            res.end();
        }
        console.log("deleted  a entry from  collection.");
        callback();
    });
};


//For Updating Data
app.post('/updateData', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        updateOperation(db, req.body, function() {
            console.log("id for is" + req.body.id)
            res.write("Successfully updated");
            res.end();
        });
    });
})
var updateOperation = function(db, data, callback) {
    console.log('Data is :'+ JSON.stringify(data));

    var id= data.id;
    console.log("id for update is" + id)
    db.collection('khushbutable').updateOne( {"_id": ObjectId(id)},{$set:data}, function(err, result) {
        if(err)
        {
            res.write("Registration Failed, Error While Registering");
            res.end();
        }
        console.log("Updated  an entry from  collection.");
        callback();
    });
};

