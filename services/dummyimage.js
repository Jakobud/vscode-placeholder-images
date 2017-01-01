module.exports = {
  label: 'DummyImage',
  description: 'http://dummyimage.com',
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
    text: {
      placeHolder: 'Text?',
      action: 'input',
      regex: '^.+$'
    },
    textColor: {
      placeHolder: 'Text Color (#RRGGBB or #RGB)?',
      action: 'input',
      regex: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'
    },
    backgroundColor: {
      placeHolder: 'Background Color (#RRGGBB or #RGB)?',
      action: 'input',
      regex: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'
    },
    format: {
      action: 'select',
      placeHolder: 'Image format?',
      items: [{
        label: '.gif'
      }, {
        label: '.png'
      }, {
        label: '.jpg'
      }]
    }
  },
  format: function () {
    const attr = this.attributes
    let url = 'https://dummyimage.com/'

    // Width
    url += attr.width.value

    // Height
    if (attr.height.value) {
      url += 'x' + attr.height.value
    }

    // Background Color
    if (attr.backgroundColor.value) {
      url += '/' + attr.backgroundColor.value.replace('#', '')
    }

    // Text Color
    if (attr.textColor.value) {
      url += '/' + attr.textColor.value.replace('#', '')
    }

    // Image format
    if (attr.format.value) {
      url += attr.format.value
    }

    // Text
    if (attr.text.value) {
      url += '?text=' + encodeURIComponent(attr.text.value)
    }

    return url
  }
}
