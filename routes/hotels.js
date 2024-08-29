const express = require('express');
const app = express();
const router = express.Router();
const HotelService = require('../services/hotels');
const service = new HotelService();

router.get('/', async (req, res, next) => {
  const query = req.query;
  try {
    const hotels = await service.find(query);
    res.json(hotels);
  } catch (error) {
    next(error);
  }
});

router.get('/cities', async (req, res, next) => {
  const cities = await service.findHotelCities();
  res.json(cities);
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const hotel = await service.findOne(id);
    res.json(hotel);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  try {
    const hotels = await service.create(body);
    res.json(hotels);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const hotels = await service.update(id, body);
    res.json(hotels);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id/update', async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const hotels = await service.updateStatus(id, body);
    res.json(hotels);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
