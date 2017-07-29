const express = require('express');
const db = require('../models/');

const router = new express.Router();

router.get('/client', (req, res, next) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});


module.exports = router;
