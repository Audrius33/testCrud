const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')
const validateItems = require("../middle/validateItems")


router.post('/uploadItems',validateItems, controller.saveItems)

module.exports = router