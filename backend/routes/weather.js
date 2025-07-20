const express = require('express');
const router = express.Router();
const Weather = require('../models/Weather');

router.post('/save', async (req, res) => {
  try {
    const weather = new Weather(req.body);
    const saved = await weather.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Error saving weather', error: err });
  }
});

module.exports = router;
