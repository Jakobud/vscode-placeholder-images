const inputAction = require('../actions/input')

module.exports = {
  label: 'PlaceSkull',
  description: 'https://placeskull.com',
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

    // Background Color
    let backgroundColor = await inputAction({
      placeHolder: 'Background Color (Optional)',
      prompt: 'The color of the background in hex format (RRGGBB)',
      regex: '^([A-Fa-f0-9]{6})$',
      invalid: 'The color must be 6-digit hex format'
    })

    if (typeof(backgroundColor) === 'undefined') {
      return undefined
    }

    // Skull ID
    let skull = await inputAction({
      placeHolder: 'Skull ID (1-45) (Optional)',
      prompt: 'Choose a specific skull ID (Optional)',
      regex: '^([1-9]|[1-3][0-9]|4[0-5])$',
      invalid: 'The skull ID is between 1-45'
    })

    if (typeof(skull) === 'undefined') {
      return undefined
    }

    // Build the URL
    let url = 'https://placeskull.com'

    url += `/${width}`

    if (height !== '') {
      url += `/${height}`
    }

    if (backgroundColor !== '') {
      url += `/${backgroundColor}`
    }

    if (skull !== '') {
      url += `/${skull}`
    }

    return url
  }
}
