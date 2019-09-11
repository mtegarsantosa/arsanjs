const route = require('express').Router()
const c = require('../core/Controller')

route.get('/', (req,res)=>{
  c.name('AController').welcome(req,res)
})

module.exports = route
