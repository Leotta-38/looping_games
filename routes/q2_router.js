const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/q2', (req, res) => {
  const sql = `
    UPDATE usersessions SET q1 = $1 
    WHERE sid = $2;
  `
  db.query(sql, [req.query.a, req.session.id], (err, result) => {
    if (err) {
      console.log(err);
    }

    res.render('q2', {
      next: 'q3'
    })
  })
})


module.exports = router