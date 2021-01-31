const inputAction = require('../actions/input')
const selectAction = require('../actions/select')

module.exports = {
  label: 'placeholder.com',
  description: 'https://placeholder.com',
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

    // Text
    let text = await inputAction({
      placeHolder: 'Text (Optional)',
      prompt: 'Optional text on the image',
      regex: '^.+$',
      invalid: 'The text must be any alphanumeric characters'
    })

    if (typeof(text) === 'undefined') {
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

    // Text Color
    let textColor = await inputAction({
      placeHolder: 'Text Color (Optional)',
      prompt: 'The color of the text in hex format (RRGGBB)',
      regex: '^([A-Fa-f0-9]{6})$',
      invalid: 'The color must be 6-digit hex format'
    })

    if (typeof(textColor) === 'undefined') {
      return undefined
    }

    // Choose image type
    let imageType = await selectAction({
      placeHolder: 'Image Type',
      items: ['.gif (default)', '.jpg', '.png']
    })

    if (typeof(imageType) === 'undefined') {
      return undefined
    }

    // Build the URL
    let url = 'https://via.placeholder.com'

    url += `/${width}`

    if (height !== '') {
      url += `x${height}`
    }

    if (backgroundColor !== '' || textColor !== '') {
      url += `/`
    }

    if (backgroundColor !== '') {
      url += `${backgroundColor}`
    }

    if (textColor !== '') {
      url += `/${textColor}`
    }

    if (imageType !== '.gif (default)') {
      url += imageType
    }

    if (text !== '') {
      url += `?text=${encodeURIComponent(text)}`
    }

    return url
  }
}
