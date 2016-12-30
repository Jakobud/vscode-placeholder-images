module.exports = {
  label: 'placehold.it',
  description: 'https://placehold.it',
  url: 'https://placehold.it/',
  format: function () {
    var attr = this.attributes
    this.url += attr.width.value

    if (attr.height.value !== '') {
      this.url += 'x' + attr.height.value
    }

    if (attr.backgroundColor.value !== '') {
      this.url += '/' + attr.backgroundColor.value.replace('#', '')
    }

    if (attr.textColor.value !== '') {
      if (attr.backgroundColor.value === '') {
        this.url += '/'
      }
      this.url += '/' + attr.textColor.value.replace('#', '')
    }

    if (attr.text.value !== '') {
      this.url += '?text=' + encodeURIComponent(attr.text.value)
    }
  },
  attributes: {
    width: {
      placeHolder: 'Width?',
      action: 'input',
      regex: '^\\d+$'
    },
    height: {
      placeHolder: 'Height?',
      action: 'input',
      optional: true,
      regex: '^\\d+$',
      format: function (value) {
        return 'x' + value
      }
    },
    text: {
      placeHolder: 'Text?',
      action: 'input',
      optional: true,
      regex: '^.+$',
      format: function (value) {
        return '?text=' + encodeURIComponent(value)
      }
    },
    textColor: {
      placeHolder: 'Text Color (#RRGGBB)?',
      action: 'input',
      optional: true,
      regex: '^#([A-Fa-f0-9]{6})$',
      format: function (value) {
        return '/' + value.replace('#', '')
      }
    },
    backgroundColor: {
      placeHolder: 'Background Color (#RRGGBB)?',
      action: 'input',
      optional: true,
      regex: '^#([A-Fa-f0-9]{6})$',
      format: function (value) {
        return '/' + value.replace('#', '')
      }
    }
  }
}
