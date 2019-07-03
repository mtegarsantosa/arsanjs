class Controller {
  static name(c){
    let controller = require('../app/controllers/'+c)
    return controller
  }
}

module.exports = Controller
