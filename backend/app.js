var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let movieRouter = require('./routes/movies');
let reviewRouter = require('./routes/review');

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { db } = require('./config/database');
const {config} = require('./config/Config');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

app.use(function (req,res,next){
  console.log("our guard middleware ",req.url);
  next();
});

const verifyUserToken = (req, res, next) => {
  let token = req.headers.authorization;
  //console.log('Token ',token);
  if (!token) return res.status(401).send("Access Denied / Unauthorized request");

  try {
    token = token.split(' ')[1] // Remove Bearer from string

    if (token === 'null' || !token) return res.status(401).send('Unauthorized request');

    let verifiedUser = jwt.verify(token, config.TOKEN_SECRET);   // config.TOKEN_SECRET => 'secretKey'
    if (!verifiedUser) return res.status(401).send('Unauthorized request')

    req.user = verifiedUser; // user_id
    next();

  } catch (error) {
    console.log(error);
    res.status(400).send("Invalid Token");
  }

}
app.use('/', indexRouter);
app.use('/auth', usersRouter);
app.use('/movies',verifyUserToken, movieRouter);
app.use('/reviews',verifyUserToken,reviewRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
