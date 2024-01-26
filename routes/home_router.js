const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('home', {
    next: 'q1'
  })
})

module.exports = router