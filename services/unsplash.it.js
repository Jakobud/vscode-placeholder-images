module.exports = {
  label: 'unsplash.it',
  description: 'http://unsplash.it',
  attributes: {
    width: {
      action: 'input',
      placeHolder: 'Width',
      regex: '^\\d+$',
      required: true
    },
    height: {
      action: 'input',
      placeHolder: 'Height',
      regex: '^\\d+$'
    },
    random: {
      action: 'boolean',
      placeHolder: 'Random Image?'
    },
    grayscale: {
      action: 'boolean',
      placeHolder: 'Grayscale?'
    },
    blur: {
      action: 'boolean',
      placeHolder: 'Blur?'
    },
    crop: {
      action: 'select',
      placeHolder: 'Crop Gravity',
      items: [{
        label: 'Center'
      }, {
        label: 'North'
      }, {
        label: 'East'
      }, {
        label: 'South'
      }, {
        label: 'West'
      }]
    }
  },
  format: function () {
    const attr = this.attributes

    let url = 'http://unsplash.it'

    // Grayscale
    if (attr.grayscale.value === true) {
      url += '/g'
    }

    // Width
    url += '/' + attr.width.value

    // Height
    if (attr.height.value) {
      url += '/' + attr.height.value
    }

    let params = []
    // Random Image
    if (attr.random.value === true) {
      params.push('random')
    }

    // Blur
    if (attr.blur.value === true) {
      params.push('blur')
    }

    // Crop gravity direction
    if (typeof (attr.crop.value) !== 'undefined') {
      params.push('gravity=' + attr.crop.value)
    }

    // Append parameters
    if (params.length > 0) {
      url += '?' + params.join('&')
    }

    return url
  }
}
