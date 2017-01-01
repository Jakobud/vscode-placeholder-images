module.exports = {
  label: 'placekitten',
  description: 'http://placekitten.com',
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
      regex: '^\\d+$'
    },
    grayscale: {
      placeHolder: 'Grayscale?',
      action: 'boolean'
    }
  },
  format: function () {
    const attr = this.attributes
    let url = 'http://placekitten.com'

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

    return url
  }
}
