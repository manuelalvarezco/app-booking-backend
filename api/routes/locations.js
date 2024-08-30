const express = require('express');
const router = express.Router();
require('dotenv').config();
const ReservesService = require('../services/locations');
const service = new ReservesService();

router.get('/getAccesstoken', async (req, res, next) => {
  try {
    const response = await service.getAccesstoken();

    const data = await response.json();

    console.log('data', data);

    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/countries', async (req, res, next) => {
  const token = req.headers.token;
  console.log('token', token);

  try {
    const response = await service.findCountries(token);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/states/:country', async (req, res, next) => {
  const token = req.headers.token;
  const { country } = req.params;
  try {
    const response = await service.findStates(token, country);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/cities/:city', async (req, res, next) => {
  const token = req.headers.token;
  const { city } = req.params;
  try {
    const response = await service.findCities(token, city);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
