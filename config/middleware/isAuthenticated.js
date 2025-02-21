/**
 * Middleware to check if the user is authenticated.
 * 
 * This middleware function checks if the `req.user` object exists, which indicates
 * that the user is authenticated. If the user is authenticated, the function allows
 * the request to proceed. If the user is not authenticated, it redirects the user
 * to the login page.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
module.exports = (req, res) => {
  if (req.user) return;
  res.redirect('/login');
};
