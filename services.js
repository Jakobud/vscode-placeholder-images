module.exports = [
  {
    'label': 'LoremPixel',
    'description': 'http://lorempixel.com',
    'attributes': [{
      'action': 'input',
      'placeHolder': 'Width?'
    }, {
      'action': 'input',
      'placeHolder': 'Height?'
    }, {
      'action': 'input',
      'placeHolder': 'Text?'
    }, {
      'action': 'select',
      'placeHolder': 'select a category',
      'items': [{
        'label': 'abstract'
      }, {
        'label': 'animals'
      }, {
        'label': 'business'
      }, {
        'label': 'cats'
      }, {
        'label': 'city'
      }, {
        'label': 'food'
      }, {
        'label': 'nightlife'
      }, {
        'label': 'fashion'
      }, {
        'label': 'people'
      }, {
        'label': 'nature'
      }, {
        'label': 'sports'
      }, {
        'label': 'technics'
      }]
    }]
  }, {
    'label': 'placekitten',
    'description': 'http://placekitten.com',
    'attributes': [{
      'action': 'input',
      'placeHolder': 'Width'
    }, {
      'action': 'input',
      'placeHolder': 'Height'
    }, {
      'action': 'boolean',
      'placeHolder': 'Grayscale?'
    }]
  }, {
    'label': 'placehold.it',
    'description': 'http://placehold.it',
    'attributes': [{
      'action': 'input',
      'placeHolder': 'Width? (example: 350)',
      'type': 'int'
    }, {
      'action': 'input',
      'placeHolder': 'Height? (example: 200)',
      'type': 'int'
    }, {
      'action': 'input',
      'placeHolder': 'Text (optional)',
      'type': 'string',
      'optional': true
    }, {
      'action': 'input',
      'placeHolder': 'Text Color (#RRGGBB)',
      'type': 'string',
      'optional': true
    }, {
      'action': 'input',
      'placeHolder': 'Background Color (#RRGGBB)',
      'type': 'string',
      'optional': true
    }],
    'format': 'https://placehold.it/$0x$1'
  }, {
    'label': 'DummyImage',
    'description': 'http://dummyimage.com',
    'attributes': [{
      'action': 'input',
      'placeHolder': 'Width'
    }, {
      'action': 'input',
      'placeHolder': 'Height'
    }, {
      'action': 'input',
      'placeHolder': 'Text (optional)'
    }, {
      'action': 'input',
      'placeHolder': 'Text Color (#RRGGBB)'
    }, {
      'action': 'input',
      'placeHolder': 'Background Color (#RRGGBB)'
    }, {
      'action': 'select',
      'placeHolder': 'Choose an image format',
      'items': [{
        'label': 'gif',
        'description': '(default)'
      }, {
        'label': 'png'
      }, {
        'label': 'jpg'
      }]
    }]
  }, {
    'label': 'LoremFlickr',
    'description': 'http://loremflickr.com',
    'attributes': [{
      'action': 'input',
      'placeHolder': 'Width'
    }, {
      'action': 'input',
      'placeHolder': 'Height'
    }, {
      'action': 'boolean',
      'placeHolder': 'Grayscale?'
    }, {
      'action': 'input',
      'placeHolder': 'Enter an optional keyword'
    }, {
      'action': 'select',
      'placeHolder': 'Select a modifer',
      'items': [{
        'label': 'Grayscale'
      }, {
        'label': 'p?'
      }, {
        'label': 'Red'
      }, {
        'label': 'Green'
      }, {
        'label': 'Blue'
      }]
    }]
  }, {
    'label': 'unsplash.it',
    'description': 'http://unsplash.it',
    'attributes': [{
      'action': 'input',
      'placeHolder': 'Width'
    }, {
      'action': 'input',
      'placeHolder': 'Height'
    }, {
      'action': 'boolean',
      'placeHolder': 'Grayscale?'
    }, {
      'action': 'boolean',
      'placeHolder': 'Blur?'
    }, {
      'action': 'select',
      'placeHolder': 'Crop Gravity',
      'items': [{
        'label': 'North'
      }, {
        'label': 'East'
      }, {
        'label': 'South'
      }, {
        'label': 'West'
      }, {
        'label': 'Center'
      }]
    }]
  }, {
    'label': 'Fake Images Please',
    'description': 'http://fakeimg.pl',
    'attributes': [{
      'action': 'input',
      'placeHolder': 'Width'
    }, {
      'action': 'input',
      'placeHolder': 'Height'
    }, {
      'action': 'input',
      'placeHolder': 'Text (optional)'
    }, {
      'action': 'input',
      'placeHolder': 'Text Color (#RRGGBB)'
    }, {
      'action': 'input',
      'placeHolder': 'Text Alpha (0-255)'
    }, {
      'action': 'input',
      'placeHolder': 'Background Color (#RRGGBB)'
    }, {
      'action': 'input',
      'placeHolder': 'Background Alpha (0-255)'
    }, {
      'action': 'select',
      'placeHolder': 'Choose a font',
      'items': [{
        'label': 'Lobster',
        'description': '(default)'
      }, {
        'label': 'Bebas'
      }, {
        'label': 'Museo'
      }]
    }]
  }, {
    'label': 'placeskull',
    'description': 'http://placeskull.com',
    'attributes': [{
      'action': 'input',
      'placeHolder': 'Width'
    }, {
      'action': 'input',
      'placeHolder': 'Height'
    }, {
      'action': 'input',
      'placeHolder': 'Skull id (0-25?)'
    }, {
      'action': 'input',
      'placeHolder': 'Background Color (#RRGGBB)'
    }, {
      'action': 'boolean',
      'placeHolder': 'Pring image dimensions?',
      'items': [{
        'label': 'Yes',
      }, {
        'label': 'No'
      }]
    }]
  }, {
    'label': 'Pipsum',
    'description': 'http://pipsum.com',
    'attributes': [{
      'action': 'input',
      'placeHolder': 'Width'
    }, {
      'action': 'input',
      'placeHolder': 'Height'
    }]
  }];