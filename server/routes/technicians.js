const express = require('express');
const router = express.Router();
const User = require('../db/models/User');

router.get('/', (req, res) => {
  return User.fetchAll({
    withRelated: ['projects']
  }).then(technicians => {
    return res.json(technicians);
  });
});

module.exports = router;
