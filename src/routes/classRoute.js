const express = require('express');
const router = express.Router();
const classController = require('./../controller/classController.js')

router.post('/', classController.createClass);
router.get('/', classController.getClass);

module.exports = router;