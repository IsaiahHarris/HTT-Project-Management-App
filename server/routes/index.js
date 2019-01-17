const express = require('express');
const router = express.Router();
const projects = require('./projects');
const auth = require('./auth');

router.use('/projects', projects);
router.use('/', auth);
module.exports = router;
