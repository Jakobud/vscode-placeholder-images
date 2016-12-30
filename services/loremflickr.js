module.exports = {
  label: 'LoremFlickr',
  description: 'http://loremflickr.com',
  url: 'http://loremflickr.com$3$0$1$2',
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
    regex: '^\\d+$',
    format: function (value) {
      return '/' + value
    }
  }, {
    placeHolder: 'Search for Flickr keyword',
    action: 'input',
    optional: true,
    regex: '^.+$',
    format: function (value) {
      return '/' + value
    }
  }, {
    action: 'select',
    placeHolder: 'Select a modifer',
    optional: true,
    items: [{
      label: 'Grayscale',
      value: 'g'
    }, {
      label: 'Pixelated',
      value: 'p'
    }, {
      label: 'Red overlay',
      value: 'red'
    }, {
      label: 'Green overlay',
      value: 'green'
    }, {
      label: 'Blue overlay',
      value: 'blue'
    }],
    format: function (value) {
      return '/' + value
    }
  }]
}
