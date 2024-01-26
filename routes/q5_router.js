const express = require('express')
const router = express.Router()
const db = require('../db')


router.get('/q5', (req, res) => {
  const sql1 = `
    UPDATE usersessions SET q4 = $1 
    WHERE sid = $2;
  `
  db.query(sql1, [req.query.a, req.session.id], (err1, result1) => {
    if (err1) {
      console.log(err1);
    }

    const answers = ['C', 'A', 'D', 'D']
    let aLink = true

    const sql2 = `
      SELECT q1, q2, q3, q4 FROM usersessions 
      WHERE sid = $1;
    `
    db.query(sql2, [req.session.id], (err2, result2) => {
      if (err2) {
        console.log(err2);
      }

      let userAnswer = result2.rows[0]

      if (answers[0] !== userAnswer.q1) {
        aLink =  false
      } else if (answers[1] !== userAnswer.q2) {
        aLink =  false
      } else if (answers[2] !== userAnswer.q3) {
        aLink =  false
      } else if (answers[3] !== userAnswer.q4) {
        aLink =  false
      }

      if (aLink) {
        res.render('q5', {
        next: 'check',
        aLink: aLink
        })
      } else {
        res.render('q5', {
          next: 'check',
          aLink: false
        })
      }
    })
  })
})


module.exports = router