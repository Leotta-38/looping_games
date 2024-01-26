const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/q3', (req, res) => {
  const sql = `
    UPDATE usersessions SET q2 = $1 
    WHERE sid = $2;
  `
  db.query(sql, [req.query.a, req.session.id], (err, result) => {
    if (err) {
      console.log(err);
    }

    res.render('q3', {
      next: 'q4'
    })
  })
})


module.exports = router