const config = require('dotenv-extended').load({
  schema: '.env.schema',
  errorOnMissing: true,
  errorOnExtra: true
});

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport/setup');
const dispatcher = require('./routes/dispatcher');

const url = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`;

mongoose.connect(url, {useNewUrlParser: true});
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//express session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false, // resaves session variables if nothing is changed
  saveUninitialized: false, //allows saving empty values in session
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', dispatcher);

app.listen(config.PORT, () => console.log(
    `Server running on port ${config.PORT}`
));