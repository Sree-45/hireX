const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const db = require('./models');

const app = express();

// Middleware to parse URL-encoded data and JSON data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the 'public' and 'assets' directories
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Configure session management
app.use(
  session({ secret: 'FP PemWeb', resave: true, saveUninitialized: true }),
);

// Initialize Passport for authentication
app.use(passport.initialize());
app.use(passport.session());

// Set the views directory and view engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Import and use route modules
require('./routes/homepage')(app);
require('./routes/login')(app);
require('./routes/signup')(app);
require('./routes/profile')(app);
require('./routes/products')(app);

// Sync database and start the server
db.sequelize.sync().then(() => app.listen(process.env.PORT || 3000));