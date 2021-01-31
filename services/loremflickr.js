const inputAction = require('../actions/input')
const selectAction = require('../actions/select')

module.exports = {
  label: 'LoremFlickr',
  description: 'https://loremflickr.com',
  generateUrl: async function() {
    // Image Width
    let width = await inputAction({
      required: true,
      placeHolder: 'Width',
      prompt: 'Width of the image',
      regex: '^\\d+$',
      invalid: 'Image width must be a whole number (integer)'
    })

    if (typeof(width) === 'undefined') {
      return undefined
    }

    // Image Height
    let height = await inputAction({
      placeHolder: 'Height (Optional)',
      prompt: 'Height of the image (optional)',
      regex: '^\\d+$',
      invalid: 'Image height must be a whole number (integer)'
    })

    if (typeof(height) === 'undefined') {
      return undefined
    }

    // Keyword
    let keyword = await inputAction({
      placeHolder: 'Flickr keyword search (Optional)',
      prompt: 'Search for a Flickr keyword',
      regex: '^.+$',
      invalid: 'The keyword must be any word'
    })

    if (typeof(keyword) === 'undefined') {
      return undefined
    }

    // Style
    let stylized = await selectAction({
      placeHolder: 'Stylize Image?',
      items: ['None', 'Grayscale', 'Pixelated', 'Red Overlay', 'Green Overlay', 'Blue Overlay']
    })

    if (typeof(stylized) === 'undefined') {
      return undefined
    }

    // Build the URL
    let url = 'https://loremflickr.com'

    switch (stylized) {
      case 'Grayscale':
        url += `/g`
        break
      case 'Pixelated':
        url += `/p`
        break
      case 'Red Overlay':
        url += `/red`
        break
      case 'Green Overlay':
        url += `/green`
        break
      case 'Blue Overlay':
        url += `/blue`
        break
      default:
    }

    url += `/${width}`

    if (height !== '') {
      url += `/${height}`
    }

    if (keyword !== '') {
      url += `/${encodeURIComponent(keyword)}`
    }

    return url
  }
}
