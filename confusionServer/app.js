//importing dependencys modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose')
var session = require('express-session')
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var config = require('./config.js')

//importing files modules
var dishRouter = require('./routes/dishRouter.js');
var promoRouter = require('./routes/promoRouter.js');
var leadersRouter = require('./routes/leadersRouter.js');
var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users.js');


// mongoDb server configuration 
const url = config.mongoUrl;
const connect = mongoose.connect(url);
connect.then((db) => {
  console.log('Connected correctly to  server');
}, (err) => { console.log(err) })


// app configuration
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//seting Server sets
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  name: 'session-id',
  secret: '1234567890-09',
  saveUninitialized: false,
  resave: false,
  store: new FileStore()
}));
app.use(passport.initialize());
app.use(passport.session())

// server  routes
app.use('/', indexRouter);
app.use('/users', usersRouter);0

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leadersRouter);

app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
