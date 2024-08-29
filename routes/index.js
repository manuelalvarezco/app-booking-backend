const hotelsRouter = require('./hotels');
const rommsRouter = require('./romms');
const authRouter = require('./authentication');
const locationRouter = require('./locations');
const reserveRouter = require('./reserves');
const userRouter = require('./users');

const express = require("express");

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/auth', authRouter);
  router.use('/hotels', hotelsRouter);
  router.use('/romms', rommsRouter);
  router.use('/locations', locationRouter);
  router.use('/reserves', reserveRouter);
  router.use('/users', userRouter);
}

module.exports = routerApi;
