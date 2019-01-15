const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('project get all route');
});

module.exports = router;
