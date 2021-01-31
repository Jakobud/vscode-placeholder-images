const inputAction = require('../actions/input')
const booleanAction = require('../actions/boolean')

module.exports = {
  label: 'placekitten',
  description: 'https://placekitten.com',
  generateUrl: async function () {
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

    // Grayscale
    let grayscale = await booleanAction({
      placeHolder: 'Grayscale?',
    })

    if (typeof(grayscale) === 'undefined') {
      return undefined
    }

    // Build the URL
    let url = 'https://placekitten.com'

    if (grayscale === true) {
      url += `/g`
    }

    url += `/${width}`
    
    if (height !== '') {
      url += `/${height}`
    }

    return url
  }
}
