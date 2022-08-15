const inputAction = require('../actions/input')

module.exports = {
  label: 'Placecircle',
  description: 'https://elouwerse.nl/placecircle',
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

    // Build the URL
    let url = 'https://elouwerse.nl/placecircle'

    url += `/${width}`

    return url
  }
}
