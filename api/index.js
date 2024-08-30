const express = require('express');
const dbConnection = require('./database/config');
const cors = require('cors');
require('dotenv').config();

const routerApi = require('./routes');
const { logErrors, hendleError } = require('./middlewares/handleError');
const app = express();
const port = process.env.APP_PORT || 3000;
app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
  res.send('This is a REST API for app-booking-app');
});

dbConnection();

routerApi(app);


app.use(logErrors);
app.use(hendleError);

app.listen(port, () => {
  console.log('Servicio corriendo en el puerto: ' + port);
});

module.exports = app;
