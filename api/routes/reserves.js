const express = require('express');
const app = express();
const router = express.Router();
const ReservesService = require('../services/reserves');
const service = new ReservesService();

router.get('/', async (req, res, next) => {
  try {
    const reserves = await service.find();
    res.json(reserves);
  } catch (error) {
    next(error);
  }
});

router.get('/user/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const reserves = await service.findByUserId(id);
    res.json(reserves);
  } catch (error) {
    next(error);
  }
});

router.post('', async (req, res, next) => {
  const body = req.body;
  try {
    const reserves = await service.create(body);
    res.json(reserves);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
