const express = require('express');
const router = express.Router();
require('dotenv').config();

const UNIVERSAL_API = process.env.UNIVERSAL_API;
const API_TOKEN = process.env.API_TOKEN;
const USER_EMAIL = process.env.USER_EMAIL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

router.get('/getAccesstoken', async (req, res, next) => {
  const options = {
    method: 'GET',
    headers: {
      'api-token': API_TOKEN,
      'user-email': USER_EMAIL,
    },
  };
  try {
    const response = await fetch(`${UNIVERSAL_API}/getaccesstoken`, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/countries', async (req, res, next) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  try {
    const response = await fetch(`${UNIVERSAL_API}/countries`, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/states/:country', async (req, res, next) => {
  const { country } = req.params;
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  try {
    const response = await fetch(`${UNIVERSAL_API}/states/${country}`, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/cities/:city', async (req, res, next) => {
  const { city } = req.params;
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  try {
    const response = await fetch(`${UNIVERSAL_API}/cities/${city}`, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
