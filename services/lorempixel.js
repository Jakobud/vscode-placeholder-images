module.exports = {
  label: 'LoremPixel',
  description: 'http://lorempixel.com',
  url: 'http://lorempixel.com/$4$0$1$2$3',
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
    action: 'select',
    placeHolder: 'Category?',
    optional: true,
    items: [{
      label: 'Abstract',
      value: 'abstract'
    }, {
      label: 'Animals',
      value: 'animals'
    }, {
      label: 'Business',
      value: 'business'
    }, {
      label: 'Cats',
      value: 'cats'
    }, {
      label: 'City',
      value: 'city'
    }, {
      label: 'Food',
      value: 'food'
    }, {
      label: 'Nightlife',
      value: 'nightlife'
    }, {
      label: 'Fashion',
      value: 'fashion'
    }, {
      label: 'People',
      value: 'people'
    }, {
      label: 'Nature',
      value: 'nature'
    }, {
      label: 'Sports',
      value: 'sports'
    }, {
      label: 'Technics',
      value: 'technics'
    }],
    format: function (value) {
      return '/' + value
    }
  }, {
    placeHolder: 'Text?',
    action: 'input',
    regex: '^.+$',
    optional: true,
    format: function (value) {
      return '/' + encodeURIComponent(value)
    }
  }, {
    placeHolder: 'Greyscale?',
    action: 'boolean',
    format: function (value) {
      return 'g/'
    }
  }]
}
