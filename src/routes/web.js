const express = require('express');
const router = express.Router();
//definite route
router.get('/', (req, res)=>{
  res.render('sample.ejs')
})

module.exports = router;