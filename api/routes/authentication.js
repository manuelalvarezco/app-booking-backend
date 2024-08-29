const express = require('express');
const app = express();
const router = express.Router();

router.get('/login', async (req, res, next) => {
  try {
    res.send('login');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
