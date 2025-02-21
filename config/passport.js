const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');


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
            message: 'Email tidak terdaftar',
          });
        }
        if (!dbUser.validPassword(user_password)) {
          return done(null, false, {
            message: 'Password salah',
          });
        }

        return done(null, dbUser);
      });
    },
  ),
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
