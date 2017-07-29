const express = require('express');
const db = require('../models/');

const router = new express.Router();

router.get('/client', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.post('/client/service', (req,res) => {
	console.log(req.body);

	db.Services.create({
		begin_date: req.body.begin_date,
		end_date: req.body.end_date,

	});
});


module.exports = router;
