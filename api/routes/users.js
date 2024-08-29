const express = require('express');
const router = express.Router();
const UsersService = require('../services/users');
const service = new UsersService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post('', async (req, res, next) => {
  const body = req.body;
  try {
    const users = await service.create(body);
    res.json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
