module.exports = {
  label: 'Pipsum',
  description: 'http://pipsum.com',
  attributes: {
    'width': {
      placeHolder: 'Width?',
      action: 'input',
      regex: '^\\d+$',
      required: true
    },
    'height': {
      placeHolder: 'Height?',
      action: 'input',
      regex: '^\\d+$',
      required: true
    }
  },
  format: function () {
    const attr = this.attributes
    let url = 'http://pipsum.com/'

    // Width
    url += attr.width.value

    // Height
    url += 'x' + attr.height.value

    // Extension
    url += '.jpg'

    return url
  }
}
