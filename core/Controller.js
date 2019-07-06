module.exports = {
 name(c){
    let controller = require('../app/controllers/'+c)
    return controller
  }
}
