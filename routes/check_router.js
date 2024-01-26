const express = require('express')
const router = express.Router()
const db = require('../db')


router.get('/check', (req, res) => {
  const sql1 = `
    SELECT count from usersessions 
    WHERE sid = $1;
  `
  db.query(sql1, [req.session.id], (err1, result1) => {
    if (err1) {
      console.log(err1);
    }

    let count = result1.rows[0].count
    count ++
    const sql2 = `
      UPDATE usersessions SET count = $1 
      WHERE sid = $2;
    `
    db.query(sql2, [count, req.session.id], (err2, result2) => {
      if (err2) {
        console.log(err2);
      }
      
      res.redirect('/q1')
    })
  })
})

module.exports = router