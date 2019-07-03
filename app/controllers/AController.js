class AController {
  static welcome(req,res){
    res.render('guest/welcome', {
      title: 'Welcome - ArsanJS'
    })
  }
}

module.exports = AController
