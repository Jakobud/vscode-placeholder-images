module.exports = {
  label: 'placeskull',
  description: 'http://placeskull.com',
  url: 'http://placeskull.com$0$1',
  attributes: [{
    placeHolder: 'Width?',
    action: 'input',
    regex: '^\\d+$',
    format: function (value) {
      return '/' + value
    }
  }, {
    placeHolder: 'Height?',
    action: 'input',
    optional: true,
    regex: '^\\d+$',
    format: function (value) {
      return '/' + value
    }
  }, {
    action: 'input',
    placeHolder: 'Skull id (0-25?)'
  }, {
    action: 'input',
    placeHolder: 'Background Color (#RRGGBB)'
  }, {
    action: 'boolean',
    placeHolder: 'Pring image dimensions?',
    items: [{
      label: 'Yes'
    }, {
      label: 'No'
    }]
  }]
}
