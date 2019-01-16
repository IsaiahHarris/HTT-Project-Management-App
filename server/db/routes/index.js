const express = require('express');
const router = express.Router();
const projects = require('./projects');

router.use('/projects', projects);

module.exports = router;
