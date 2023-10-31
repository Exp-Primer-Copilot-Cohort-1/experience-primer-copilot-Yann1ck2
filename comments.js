//Create web server
//Load modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

//Connect to the database
mongoose.connect('mongodb://localhost:27017/website');

//Define the schema for the comments
var commentSchema = new Schema({
    comment: String,
    date: Date,