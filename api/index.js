const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routerApi = require('./routes');
const { logErrors, hendleError, boomErrorHandler } = require('./middlewares/handleError');
const app = express();
const port = process.env.APP_PORT || 3000;
app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
  res.send('This is a REST API for app-booking-app');
});

routerApi(app);
app.use(logErrors);
app.use(hendleError);
app.use(boomErrorHandler);

app.listen(port, () => {
  console.log('My port: ' + port);
});

module.exports = app;
