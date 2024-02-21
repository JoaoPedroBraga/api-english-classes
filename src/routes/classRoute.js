const express = require('express');
const router = express.Router();
const classController = require('./../controller/classController.js')

router.post('/', classController.createClass);
router.get('/', classController.getClass);
router.get('/conteudo', classController.getClassCategory)

module.exports = router;