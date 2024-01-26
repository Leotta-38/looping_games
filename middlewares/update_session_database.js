const db = require("../db")

const updateSessionDatabase = (req, res, next) => {
  const sql1 = `
    SELECT * from usersessions 
    WHERE sid = $1;
  `
  db.query(sql1, [req.session.id], (err1, result1) => {
    if (err1) {
      console.log(err1);
    }

    if (result1.rows[0]) {
      next()
    } else {

      const sid = req.session.id
      const expire = req.session.cookie._expires

      const sql2 = `
        INSERT INTO usersessions (sid, expire) 
        VALUES ($1, $2);
      `
      db.query(sql2, [sid, expire], (err2, result2) => {
        if (err2) {
          console.log(err2);
        }

        next()
      })
    }
  })
}

module.exports = updateSessionDatabase