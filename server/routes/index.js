const express = require('express');
const router = express.Router();
const projects = require('./projects');
const auth = require('./auth');
const technicians = require('./technicians');

router.use('/', auth);
router.use('/projects', projects);
router.use('/technicians', technicians);
module.exports = router;
