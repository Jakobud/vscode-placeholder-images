module.exports = {
  label: 'placekitten',
  description: 'http://placekitten.com',
  url: 'http://placekitten.com/$2$0$1',
  attributes: [{
    placeHolder: 'Width?',
    action: 'input',
    regex: '^\\d+$'
  }, {
    placeHolder: 'Height?',
    action: 'input',
    regex: '^\\d+$',
    optional: true,
    format: function (value) {
      return '/' + value
    }
  }, {
    placeHolder: 'Grayscale?',
    action: 'boolean',
    format: function (value) {
      return 'g/'
    }
  }]
}
