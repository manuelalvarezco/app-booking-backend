const express = require('express');
const router = express.Router();
require('dotenv').config();
const ReservesService = require('../services/locations');
const service = new ReservesService();

router.get('/getAccesstoken', async (req, res, next) => {
  try {
    const response = await service.getAccesstoken();
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/countries', async (req, res, next) => {
  try {
    const response = await service.findCountries();
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/states/:country', async (req, res, next) => {
  const { country } = req.params;
  try {
    const response = await service.findStates(country);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/cities/:city', async (req, res, next) => {
  const { city } = req.params;
  try {
    const response = await service.findCities(city);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
