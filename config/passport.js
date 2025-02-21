const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

/**
 * Passport configuration for local authentication strategy.
 * 
 * This configuration uses the `passport-local` strategy to authenticate users
 * based on their email and password. It checks if the user exists in the database
 * and if the provided password is correct.
 */
passport.use(
  new LocalStrategy(
    {
      usernameField: 'user_email',
      passwordField: 'user_password',
    },
    (user_email, user_password, done) => {
      db.User.findOne({ where: { user_email } }).then((dbUser) => {
        if (!dbUser) {
          return done(null, false, {
            message: 'Email tidak terdaftar', // Email not registered
          });
        }
        if (!dbUser.validPassword(user_password)) {
          return done(null, false, {
            message: 'Password salah', // Incorrect password
          });
        }

        return done(null, dbUser);
      });
    },
  ),
);

/**
 * Serialize user information into the session.
 * 
 * @param {Object} user - The user object.
 * @param {Function} cb - The callback function.
 */
passport.serializeUser((user, cb) => {
  cb(null, user);
});

/**
 * Deserialize user information from the session.
 * 
 * @param {Object} obj - The user object.
 * @param {Function} cb - The callback function.
 */
passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
