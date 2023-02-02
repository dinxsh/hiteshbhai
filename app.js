const express = require('express')
var usersRouter = require('./routes/users');
const app = express()

var usersRouter = require('./routes/users');
app.set('view engine', 'ejs');
app.use('/', usersRouter);      

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/data', (req, res) => {
    res.render('data');
})

app.listen(3000, () => {
    console.log(`app listening on port`)
})