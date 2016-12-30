module.exports = {
  label: 'Fake Images Please',
  description: 'http://fakeimg.pl',
  attributes: [{
    placeHolder: 'Width?',
    action: 'input',
    regex: '^\\d+$'
  }, {
    placeHolder: 'Height?',
    action: 'input',
    optional: true,
    regex: '^\\d+$',
    format: function (value) {
      return 'x' + value
    }
  }, {
    placeHolder: 'Text?',
    action: 'input',
    optional: true,
    regex: '^.+$',
    format: function (value) {
      return 'text='
    }
  }, {
    placeHolder: 'Text Color (#RRGGBB)?',
    action: 'input'
  }, {
    placeHolder: 'Text Alpha (0-255)?',
    action: 'input'
  }, {
    placeHolder: 'Background Color (#RRGGBB)?',
    action: 'input'
  }, {
    placeHolder: 'Background Alpha (0-255)?',
    action: 'input'
  }, {
    placeHolder: 'Choose a font?',
    action: 'select',
    items: [{
      label: 'Lobster',
      description: '(default)'
    }, {
      label: 'Bebas'
    }, {
      label: 'Museo'
    }]
  }]
}
