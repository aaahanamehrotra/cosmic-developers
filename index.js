const ejs = require('ejs')
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

app = express()
require('dotenv').config()
app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use((req, res, next) => {
    res.locals.uri = process.env.ACCESS_TOKEN
    console.log(process.env.ACCESS_TOKEN)
    next();
})



app.use('/' ,require('./router.js'))



app.listen(5000, () => {
    console.log("listening")
})