const express = require('express');

const router = express.Router();

const boardsController = require('../controllers/boards');
const boardController = require('../controllers/board');
const boardAddCardController = require('../controllers/board');

router.get('/boards', boardsController.get);
router.post('/boards', boardsController.set);

router.get('/board/:id', boardController.get);
router.post('/board/:id', boardAddCardController.set);

module.exports = router;
