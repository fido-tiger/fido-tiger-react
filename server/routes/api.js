const express = require('express');
const db = require('../models/');

const router = new express.Router();

router.get('/client', (req, res) => {
  console.log('HELLLLLLOOO');
  db.Client.findOne({where: {uuid: req.body.uuid}}).then(function(user) {
    console.log('HELLLLLLOOO!!!');

  });
});


module.exports = router;
