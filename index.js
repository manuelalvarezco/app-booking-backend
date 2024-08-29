const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');
const { logErrors, hendleError, boomErrorHandler } = require('./middlewares/handleError');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('This is a REST API for app-booking-app');
});

routerApi(app);
app.use(logErrors);
app.use(hendleError);
app.use(boomErrorHandler);

app.listen(port, () => {
  console.log('My port: ' + port);
});
