const express = require('express')
const app = express()
const http = require('http').Server(app)
const path = require('path')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const extname = 'arsan'

app.set('view engine', extname)
app.set('views', path.join(__dirname, 'app', 'resources', 'views'))
app.engine(extname, exphbs({
  defaultLayout:'main',
  extname:extname,
  partialsDir: path.join(__dirname, 'app', 'resources','partials'),
  layoutsDir: path.join(__dirname, 'app', 'resources','layouts')
}))

app.use('/', require('./app/route'))
app.use('/assets', express.static('static'))

http.listen(5000, ()=>{
  console.log('server running on port 5000')
})
