var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var users = require('./model/user');
var news = require('./routes/newsServiceRoute');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var connectflash = require('connect-flash');


var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));

//user creation for login functionality
app.post('/userinsert/:userName/:password',function(req, res){
  var user = new users();
  var userName = req.params.userName;
  var password = req.params.password;
  user.userName = userName;
  user.password = password;
  user.save(function(err){
    if(err) {
      res.send(err);
    }
    else {
      res.send("User created");
    }
  });
});

//passport initialization
app.use(passport.initialize());
app.use(passport.session());
app.use(connectflash());
app.use(require('express-session')({ secret: 'accesskey'}));

//passport configuration
passport.use(new LocalStrategy(
  function(userName, password, done) {
    console.log("authentication1");
    users.findOne({ "userName": userName }, function (err, users) {
      if (err) { return done(err); }
      if (!users) {
        console.log("authentication2");
        return done(null, false, { message: 'Incorrect userName.' });
      }
      if (user.password != password) {return done(null, false); }
      return done(null, user);
    });
  }
  ));


app.post('/login',
  passport.authenticate('local', { failureFlash: 'Invalid Username and Password',
  successFlash: "Welcome to the App"}),
  function(req, res) {
    res.send('authenticated');
  });

/*app.post('/login', passport.authenticate('local', 

   {successFlash: "Welcome", failureFlash: "Fail"},
function(req, res){
     res.send('authenticated');
}));*/

app.get('/logout', function(req, res){
  console.log("logged out");
  req.session.destroy();
});

passport.serializeUser(function(user, done) {
  console.log('serializeUser');
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log("deserializeUser")
  users.findById(id, function(err, user) {
    done(err, user);
  });
});

/*app.all("/*", requireLogin, function(req, res, next) {
  next(); // if the middleware allowed us to get here,
          // just move on to the next route handler
        });*/

/*function requireLogin(req, res, next) {
  if (req.session.loggedIn) {
    next(); // allow the next route to run
  } else {
    // require the user to log in
    res.redirect("/Login"); // or render a form, etc.
  }
}*/

app.set('view engine', 'jade');
mongoose.connect("mongodb://localhost/newsdb");
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error !!!!!!!'));

db.once('open',function(){
  console.log('Connected to mongo DB Successfully');
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", express.static(path.join(__dirname, '../client/dist')));

//app.use('/', routes);
app.use('/users', users);
app.use('/news', news);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
