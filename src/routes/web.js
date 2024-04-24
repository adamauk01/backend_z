const express = require('express');
const {getHomePage} = require('../controllers/homeController');
const router = express.Router();
//definite route
// Route.Method('/route', handler)
router.get('/', getHomePage)

module.exports = router;