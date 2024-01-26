const express = require('express')
const router = express.Router()
const db = require('../db')

router.post('/q1', (req, res) => {
  const sql = `
    UPDATE usersessions SET username = $1 
    WHERE sid = $2;
  `
  db.query(sql, [req.body.username, req.session.id], (err, result) => {
    if (err) {
      console.log(err);
    }

    res.render('q1', {
      next: 'q2'
    })
  })
})


router.get('/q1', (req, res) => {
  res.render('q1', {
    next: 'q2'
  })
})


module.exports = router