require('dotenv').config()

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const requestLogger = require('./middlewares/request_logger')
const updateSessionDatabase = require('./middlewares/update_session_database')
const setCurrentUserCount = require('./middlewares/set_current_user_count')
const homeRouter = require('./routes/home_router')
const q1Router = require('./routes/q1_router')
const q2Router = require('./routes/q2_router')
const q3Router = require('./routes/q3_router')
const q4Router = require('./routes/q4_router')
const q5Router = require('./routes/q5_router')
const winRouter = require('./routes/win_router')
const checkRouter = require('./routes/check_router')

const app = express()
const port = process.env.PORT || 8080

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(requestLogger)

app.use(
  session({
    secret: process.env.SESSION_SECRET || "loopingrooms",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
  })
)

app.use(updateSessionDatabase)

app.use(setCurrentUserCount)

app.use(expressLayouts)

app.use(express.urlencoded({ extended: true}))

app.use(homeRouter)
app.use(q1Router)
app.use(q2Router)
app.use(q3Router)
app.use(q4Router)
app.use(q5Router)
app.use(winRouter)
app.use(checkRouter)


app.listen(port, () => {
  console.log(`server listening on ${port}`);
})