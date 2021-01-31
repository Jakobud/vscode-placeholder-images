const inputAction = require('../actions/input')
const booleanAction = require('../actions/boolean')
const selectAction = require('../actions/select')

module.exports = {
  label: 'Lorem Picsum',
  description: 'https://picsum.photos',
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

    // Image ID or Random
    let imageID = await inputAction({
      placeHolder: 'Image ID (leave blank for random image)',
      prompt: 'Enter an image ID or leave blank for a random image',
      regex: '^\\d+$',
      invalid: 'Image ID must be a whole number (integer)'
    })

    if (typeof(imageID) === 'undefined') {
      return undefined
    }

    // Grayscale
    let grayscale = await booleanAction({
      placeHolder: 'Grayscale?',
    })

    if (typeof(grayscale) === 'undefined') {
      return undefined
    }

    // Blur
    let blur = await selectAction({
      placeHolder: 'Blur amount',
      items: ['None', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    })

    if (typeof(blur) === 'undefined') {
      return undefined
    }

    // File extension
    let extension = await selectAction({
      placeHolder: 'Image type',
      items: ['.jpg', '.webp']
    })

    if (typeof(extension) === 'undefined') {
      return undefined
    }

    // Build the URL
    let url = 'https://picsum.photos'

    if (imageID !== '') {
      url += `/id/${imageID}`
    }

    url += `/${width}`
    
    if (height !== '') {
      url += `/${height}`
    }

    if (extension === '.webp') {
      url += `.webp`
    }

    let params = []
    
    if (grayscale === true) {
      params.push('grayscale')
    }

    if (blur !== 'None') {
      if (blur === '1') {
        params.push(`blur`)
      } else {
        params.push(`blur=${blur}`)
      }
    }

    if (params.length > 0) {
      url += `?${params.join('&')}`
    }

    return url
  }
}
