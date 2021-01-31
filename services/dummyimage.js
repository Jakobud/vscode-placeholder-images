const inputAction = require('../actions/input')
const selectAction = require('../actions/select')

module.exports = {
  label: 'DummyImage',
  description: 'https://dummyimage.com',
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
      prompt: 'The color of the background in hex format (RRGGBB or RGB)',
      regex: '^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
      invalid: 'The color must be 6-digit (RRGGBB) or 3-digit (RGB) hex format'
    })

    if (typeof(backgroundColor) === 'undefined') {
      return undefined
    }

    // Text Color
    let textColor = await inputAction({
      placeHolder: 'Text Color (Optional)',
      prompt: 'The color of the text in hex format (RRGGBB or RGB)',
      regex: '^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
      invalid: 'The color must be 6-digit (RRGGBB) or 3-digit (RGB) hex format'
    })

    // Choose image type
    let imageType = await selectAction({
      placeHolder: 'Image Type',
      items: ['.gif (default)', '.jpg', '.png']
    })

    if (typeof(imageType) === 'undefined') {
      return undefined
    }

    // Build the URL
    let url = 'https://dummyimage.com'

    url += `/${width}`

    if (height !== '') {
      url += `x${height}`
    }

    if (backgroundColor !== '') {
      url += `${backgroundColor}`
    }

    if (textColor !== '') {
      // You cannot specify text color without a background color
      if (backgroundColor === '') {
        url += `/cccccc`
      }

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
