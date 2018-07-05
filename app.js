let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mysql = require('mysql');

let indexRouter = require('./routes/index');
let adminRouter = require('./routes/admin');
let usersRouter = require('./routes/users');
let graphQLRouter = require('./routes/graphql');

let MySqlDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'usrmgrprodb01'
});

const app = express();

// view and database setup
app.set('views', path.join(__dirname, 'views', 'content'));
app.set('view engine', 'pug')
app.set('DB', MySqlDB);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routers
app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/users', usersRouter);
app.use('/graphql', graphQLRouter);

//Not Found error handling
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;