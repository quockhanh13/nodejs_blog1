const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

//HTTP Logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
})

// 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})