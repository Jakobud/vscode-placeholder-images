module.exports = {
  label: 'Pipsum',
  description: 'http://pipsum.com',
  url: 'http://pipsum.com/$0$1',
  attributes: [{
    placeHolder: 'Width?',
    action: 'input',
    regex: '^\\d+$'
  }, {
    placeHolder: 'Height?',
    action: 'input',
    regex: '^\\d+$',
    format: function (value) {
      return 'x' + value + '.jpg'
    }
  }]
}
