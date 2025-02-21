const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const db = require('./models');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(
  session({ secret: 'FP PemWeb', resave: true, saveUninitialized: true }),
);
app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./routes/homepage')(app);
require('./routes/login')(app);
require('./routes/signup')(app);
require('./routes/profile')(app);
require('./routes/products')(app);

db.sequelize.sync().then(() => app.listen(process.env.PORT || 3000));