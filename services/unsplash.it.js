module.exports = {
  label: 'unsplash.it',
  description: 'http://unsplash.it',
  attributes: [{
    action: 'input',
    placeHolder: 'Width'
  }, {
    action: 'input',
    placeHolder: 'Height'
  }, {
    action: 'boolean',
    placeHolder: 'Grayscale?'
  }, {
    action: 'boolean',
    placeHolder: 'Blur?'
  }, {
    action: 'select',
    placeHolder: 'Crop Gravity',
    items: [{
      label: 'North'
    }, {
      label: 'East'
    }, {
      label: 'South'
    }, {
      label: 'West'
    }, {
      label: 'Center'
    }]
  }]
}
