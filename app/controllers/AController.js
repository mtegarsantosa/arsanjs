// const MyModel = require('../models/MyModel')
module.exports = {
 welcome(req,res){
   res.render('guest/welcome',{
     title:'Welcome to Arsan JS'
   })
  }
}
