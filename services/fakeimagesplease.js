module.exports = {
  label: 'Fake Images Please',
  description: 'http://fakeimg.pl',
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
    textAlpha: {
      placeHolder: 'Text Alpha (0-255)?',
      action: 'input',
      regex: '^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$'
    },
    backgroundColor: {
      placeHolder: 'Background Color (#RRGGBB or #RGB)?',
      action: 'input',
      regex: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'
    },
    backgroundAlpha: {
      placeHolder: 'Background Alpha (0-255)?',
      action: 'input',
      regex: '^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$'
    },
    font: {
      placeHolder: 'Choose a font?',
      action: 'select',
      items: [{
        label: 'Lobster'
      }, {
        label: 'Bebas'
      }, {
        label: 'Museo'
      }]
    }
  },
  format: function () {
    const attr = this.attributes

    let url = 'http://fakeimg.pl/'

    // Width
    url += attr.width.value

    // Height
    if (attr.height.value) {
      url += 'x' + attr.height.value
    }

    // Background Color
    if (attr.backgroundColor.value) {
      url += '/' + attr.backgroundColor.value
      if (attr.backgroundAlpha.value) {
        url += ',' + attr.backgroundAlpha.value
      }
    }

    // Text Color
    if (attr.textColor.value) {
      url += '/' + attr.textColor.value
      if (attr.textAlpha.value) {
        url += ',' + attr.textAlpha.value
      }
    }

    let params = []

    // Text
    if (attr.text.value) {
      params.push('text=' + encodeURIComponent(attr.text.value))
    }

    // Font
    if (attr.font.value) {
      params.push('font=' + attr.font.value)
    }

    if (params.length > 0) {
      url += '?' + params.join('&')
    }

    return url
  }
}
