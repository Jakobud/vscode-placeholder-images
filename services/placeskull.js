module.exports = {
  label: 'placeskull',
  description: 'http://placeskull.com',
  url: 'http://placeskull.com$0$1',
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
    backgroundColor: {
      action: 'input',
      placeHolder: 'Background Color (#RRGGBB)',
      regex: '^#([A-Fa-f0-9]{6})$'
    },
    skullId: {
      action: 'select',
      placeHolder: 'Skull ID?',
      items: [{
        label: '1'
      }, {
        label: '2'
      }, {
        label: '3'
      }, {
        label: '4'
      }, {
        label: '5'
      }, {
        label: '6'
      }, {
        label: '7'
      }, {
        label: '8'
      }, {
        label: '9'
      }, {
        label: '10'
      }, {
        label: '11'
      }, {
        label: '12'
      }, {
        label: '13'
      }, {
        label: '14'
      }, {
        label: '15'
      }, {
        label: '16'
      }, {
        label: '17'
      }, {
        label: '18'
      }, {
        label: '19'
      }, {
        label: '20'
      }, {
        label: '21'
      }, {
        label: '22'
      }, {
        label: '23'
      }, {
        label: '24'
      }]
    }
  },
  format: function () {
    const attr = this.attributes
    let url = 'http://placeskull.com'

    // Width
    url += '/' + attr.width.value

    // Height
    if (attr.height.value) {
      url += '/' + attr.height.value
    }

    // Background Color
    if (attr.backgroundColor.value) {
      if (!attr.height.value) {
        url += '/' + attr.width.value
      }
      url += '/' + attr.backgroundColor.value.replace('#', '')
    }

    // Skull image id
    if (attr.skullId.value && attr.backgroundColor.value) {
      url += '/' + attr.skullId.value
    }

    return url
  }
}
