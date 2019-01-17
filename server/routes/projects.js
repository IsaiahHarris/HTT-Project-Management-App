const express = require('express');
const router = express.Router();
const Project = require('../db/models/Project');
const spoolPieces = require('../db/models/Spool_Piece');
router.route('/').get((req, res) => {
  return Project.fetchAll({ withRelated: ['spoolPieces'] })
    .then(projects => {
      return res.json(projects);
    })
    .catch(err => {
      return res.json({ error: err.message });
    });
});

module.exports = router;
