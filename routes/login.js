const passport = require('../config/passport');

module.exports = (app) => {
  // If the user is already logged in, redirect them to the user dashboard
  app.post('/login/login-now', passport.authenticate('local'), (req, res) => {
    res.json('/profile'); // Redirect to the profile page
    // res.json('/profile/buyer') // Alternative redirect to buyer profile page
  });

  app.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.user) {
      res.redirect('/products/all'); // Redirect to the products page
    } else {
      // If the user is not logged in
      res.render('login/login-page'); // Render the login page
    }
  });
};
