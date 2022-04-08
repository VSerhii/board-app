const express = require('express');
const path = require('path');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// REST API routes
const apiRouter = require('./routes/api');

app.use(
  '/api',
  (req, res, next) => {
    next();
  },
  apiRouter,
);

// handle any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, host, () => {
  console.log(`Server app listening at http://${host}:${port}`);
});
