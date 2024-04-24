const express = require('express');
const {getHomePage, postCreateUser} = require('../controllers/homeController');
const router = express.Router();
//definite route
// Route.Method('/route', handler)
router.get('/', getHomePage)
router.post('/create-user', postCreateUser)
module.exports = router;