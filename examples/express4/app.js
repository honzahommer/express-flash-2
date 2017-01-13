var express = require('express')
  , flash = require('../..')
  , util = require('util');

var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

// configure Express
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(logger('dev'));
  app.use(cookieParser('keyboard cat'));
  app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized:true}));
 // use  the flash middleware 
  app.use(flash());

app.get('/', function(req, res){
  res.render('index');
});

app.get('/flash', function(req, res){
  res.flash('info', 'Hi there!')
  res.redirect('/');
});

app.get('/no-flash', function(req, res){
  res.redirect('/');
});

app.get('/multiple-flash', function(req, res){
    res.flash('info', ['Welcome', 'Please Enjoy']);
    res.redirect('/');
});

app.listen(3000);
