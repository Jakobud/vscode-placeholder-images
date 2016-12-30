module.exports = {
  label: 'DummyImage',
  description: 'http://dummyimage.com',
  url: 'https://dummyimage.com/$0$1$4$3$5$2',
  attributes: [{
    placeHolder: 'Width?',
    action: 'input',
    regex: '^\\d+$'
  }, {
    placeHolder: 'Height?',
    action: 'input',
    regex: '^\\d+$',
    format: function (value) {
      return 'x' + value
    }
  }, {
    placeHolder: 'Text?',
    action: 'input',
    regex: '^.+$',
    optional: true,
    format: function (value) {
      return '?text=' + encodeURIComponent(value)
    }
  }, {
    placeHolder: 'Text Color (#RRGGBB)?',
    action: 'input',
    optional: true,
    regex: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
    format: function (value) {
      return '/' + value.replace('#', '')
    }
  }, {
    placeHolder: 'Background Color (#RRGGBB)?',
    action: 'input',
    optional: true,
    regex: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
    format: function (value) {
      return '/' + value.replace('#', '')
    }
  }, {
    action: 'select',
    placeHolder: 'Image type?',
    items: [{
      label: 'gif',
      value: '.gif'
    }, {
      label: 'png',
      value: '.png'
    }, {
      label: 'jpg',
      value: '.jpg'
    }]
  }]
}
