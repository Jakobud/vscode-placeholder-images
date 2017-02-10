module.exports = {
  label: 'LoremPixel',
  description: 'http://lorempixel.com',
  attributes: {
    width: {
      placeHolder: 'Width?',
      action: 'input',
      regex: '^\\d+$',
      required: true
    },
    height: {
      placeHolder: 'Height?',
      action: 'input',
      regex: '^\\d+$',
      required: true
    },
    category: {
      action: 'select',
      placeHolder: 'Category?',
      items: [{
        label: 'Abstract'
      }, {
        label: 'Animals'
      }, {
        label: 'Business'
      }, {
        label: 'Cats'
      }, {
        label: 'City'
      }, {
        label: 'Food'
      }, {
        label: 'Nightlife'
      }, {
        label: 'Fashion'
      }, {
        label: 'People'
      }, {
        label: 'Nature'
      }, {
        label: 'Sports'
      }, {
        label: 'Technics'
      }]
    },
    text: {
      placeHolder: 'Text?',
      action: 'input',
      regex: '^.+$'
    },
    grayscale: {
      placeHolder: 'Greyscale?',
      action: 'boolean'
    }
  },
  format: function () {
    const attr = this.attributes
    let url = 'http://lorempixel.com'

    // Grayscale
    if (attr.grayscale.value === true) {
      url += '/g'
    }

    // Width
    url += '/' + attr.width.value

    // Height
    url += '/' + attr.height.value

    // Category
    if (attr.category.value) {
      url += '/' + attr.category.value.toLowerCase()
    }

    // Text
    if (attr.text.value) {
      url += '/' + encodeURIComponent(attr.text.value)
    }

    return url
  }
}
