const db = require("../db")

const setCurrentUserCount = (req, res, next) => {
  res.locals.count = 0

  const sql1 = `
    SELECT count FROM usersessions 
    WHERE sid = $1;
  `
  db.query(sql1, [req.session.id], (err1, result1) => {
    if (err1) {
      console.log(err1);
    }

    if (result1.rows[0].count) {
      res.locals.count = result1.rows[0].count
    }

    const sql2 = `
      UPDATE usersessions SET count = $1 
      WHERE sid = $2;
    `
    db.query(sql2, [res.locals.count, req.session.id], (err2, result2) => {
      if (err2) {
        console.log(err2);
      }

      next()
    })
  })
}

module.exports = setCurrentUserCount