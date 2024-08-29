const express = require('express');
const router = express.Router();
const RommsService = require('../services/romms');
const service = new RommsService();

router.get('/', async (req, res, next) => {
  try {
    const romms = await service.find();
    res.json(romms);
  } catch (error) {
    next(error);
  }
});

router.get('/hotel/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const romms = await service.findByHotelId(id);
    res.json(romms);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const romm = await service.findOne(id);
    res.json(romm);
  } catch (error) {
    next(error);
  }
});

router.post('', async (req, res, next) => {
  const body = req.body;
  try {
    const romms = await service.create(body);
    res.json(romms);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const romms = await service.update(id, body);
    res.json(romms);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id/update', async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const romms = await service.updateStatus(id, body);
    res.json(romms);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
