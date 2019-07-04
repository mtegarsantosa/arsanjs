module.exports = function (arsan) {
  arsan.setGenerator('controller', {
      description: 'Auto make controller on app/controllers',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'what is your controller name?'
        },
      ],
      actions: [{
          type: 'add',
          path: 'app/controllers/{{name}}.js',
          templateFile: 'templates/controller.hbs'
      }]
  })

  arsan.setGenerator('model', {
      description: 'Auto make model on app/models',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'what is your model name?'
        },
      ],
      actions: [{
          type: 'add',
          path: 'app/models/{{name}}.js',
          templateFile: 'templates/model.hbs'
      }]
  })
}
