var express = require('express');
var router = express.Router();
var User = require('../model/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(function(username, password, done) {
	console.log("username" + username);
    User.findOne({ username: username }, function (err, user) {
      if (err) {
      	console.log("error");
      	return done(err); 
      }
      if (!user) {
      	console.log("user not valid");
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password != password) {
      	console.log("password not valid");
        return done(null, false, { message: 'Incorrect password.' });
      }
      console.log("success");
      return done(null, user);
    });
  }));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, done) {
	console.log('serializeUser');
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	console.log("deserializeUser")
	User.findById(id, function(err, user) {
		done(err, user);
	});
});

router.route('/').post(passport.authenticate('local', { failureFlash: 'Invalid Username and Password',
  successFlash: "Welcome to  App"}),
function(req, res) {
    res.json({responseText:'authenticated'});
  })

module.exports = router;