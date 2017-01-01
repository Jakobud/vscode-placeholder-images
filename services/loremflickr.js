module.exports = {
  label: 'LoremFlickr',
  description: 'http://loremflickr.com',
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
    keyword: {
      placeHolder: 'Search for Flickr keyword',
      action: 'input',
      regex: '^.+$'
    },
    modifier: {
      action: 'select',
      placeHolder: 'Select a modifer',
      items: [{
        label: 'Grayscale image',
        value: 'g'
      }, {
        label: 'Pixelated image',
        value: 'p'
      }, {
        label: 'Red overlay',
        value: 'red'
      }, {
        label: 'Green overlay',
        value: 'green'
      }, {
        label: 'Blue overlay',
        value: 'blue'
      }]
    }
  },
  format: function () {
    const attr = this.attributes
    let url = 'http://loremflickr.com'

    // Modifier
    if (attr.modifier.value) {
      url += '/' + attr.modifier.value
    }

    // Width
    url += '/' + attr.width.value

    // Height
    url += '/' + attr.height.value

    // Keyword
    if (attr.keyword.value) {
      url += '/' + encodeURIComponent(attr.keyword.value)
    }

    return url
  }
}
