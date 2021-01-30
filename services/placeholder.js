module.exports = {
  label: 'placeholder.com',
  description: 'https://placeholder.com',
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
      placeHolder: 'Text Color (#RRGGBB)?',
      action: 'input',
      regex: '^#([A-Fa-f0-9]{6})$'
    },
    backgroundColor: {
      placeHolder: 'Background Color (#RRGGBB)?',
      action: 'input',
      regex: '^#([A-Fa-f0-9]{6})$'
    }
  },
  format: function () {
    const attr = this.attributes
    let url = 'https://via.placeholder.com/'

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
      if (!attr.backgroundColor.value) {
        url += '/'
      }
      url += '/' + attr.textColor.value.replace('#', '')
    }

    // Text
    if (attr.text.value) {
      url += '?text=' + encodeURIComponent(attr.text.value)
    }

    return url
  }
}
