// Exporting a function that takes an Express app instance as an argument
module.exports = (app) => {
  /** 
   * GET home page.
   * This route handles GET requests to the root URL ('/').
   */
  app.get('/', (req, res) => {
    // Rendering the 'homepage/homepage' view template with the following data:
    res.render('homepage/homepage', {
      sessions: req.user, // User session data
      page: 'Home',       // Page title
      menuId: 'home',     // Menu identifier
    });
  });
};
