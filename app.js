const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const catchAsync = require('./utils/catchAsync');
const AppError = require('./utils/AppError');

mongoose.connect('mongodb://127.0.0.1:27017/db-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('DataBase Connected'));

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.all('*', (req, res, next) => {
  next(new AppError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Oh noo Something went worng';
  res.status(statusCode).render('error', { err });
});

app.listen(3000, () =>
  console.log('Express Server running on http://localhost:3000')
);
