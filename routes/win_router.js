const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/win', (req, res) => {
  const sql = `
    SELECT username from usersessions 
    WHERE sid = $1;
  `
  db.query(sql, [req.session.id], (err, result) => {
    if (err) {
      console.log(err);
    }

    let username = result.rows[0].username
    res.render('win', {
      next: '',
      username: username
    })
  })
})

module.exports = router