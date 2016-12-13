const services = {
  'lorempixel': {
    label: 'LoremPixel',
    description: 'http://lorempixel.com',
    url: 'http://lorempixel.com/$4$0$1$2$3',
    attributes: [{
      placeHolder: 'Width?',
      action: 'input',
      regex: '^\\d+$'
    }, {
      placeHolder: 'Height?',
      action: 'input',
      regex: '^\\d+$',
      optional: true,
      format: function (value) {
        return '/' + value;
      }
    }, {
      action: 'select',
      placeHolder: 'Category?',
      optional: true,
      items: [{
        label: 'Abstract',
        value: 'abstract'
      }, {
        label: 'Animals',
        value: 'animals'
      }, {
        label: 'Business',
        value: 'business'
      }, {
        label: 'Cats',
        value: 'cats'
      }, {
        label: 'City',
        value: 'city'
      }, {
        label: 'Food',
        value: 'food'
      }, {
        label: 'Nightlife',
        value: 'nightlife'
      }, {
        label: 'Fashion',
        value: 'fashion'
      }, {
        label: 'People',
        value: 'people'
      }, {
        label: 'Nature',
        value: 'nature'
      }, {
        label: 'Sports',
        value: 'sports'
      }, {
        label: 'Technics',
        value: 'technics'
      }],
      format: function (value) {
        return '/' + value;
      }
    }, {
      placeHolder: 'Text?',
      action: 'input',
      regex: '^.+$',
      optional: true,
      format: function (value) {
        return '/' + encodeURIComponent(value);;
      }
    }, {
      placeHolder: 'Greyscale?',
      action: 'boolean',
      format: function (value) {
        return 'g/';
      }
    }]
  },
  'placekitten': {
    label: 'placekitten',
    description: 'http://placekitten.com',
    url: 'http://placekitten.com/$2$0$1',
    attributes: [{
      placeHolder: 'Width?',
      action: 'input',
      regex: '^\\d+$'
    }, {
      placeHolder: 'Height?',
      action: 'input',
      regex: '^\\d+$',
      optional: true,
      format: function (value) {
        return '/' + value
      }
    }, {
      placeHolder: 'Grayscale?',
      action: 'boolean',
      format: function (value) {
        return 'g/'
      }
    }]
  },
  'placehold.it': {
    label: 'placehold.it',
    description: 'https://placehold.it',
    url: 'https://placehold.it/$0$1$4$3$2',
    attributes: [{
      placeHolder: 'Width?',
      action: 'input',
      regex: '^\\d+$'
    },
    {
      placeHolder: 'Height?',
      action: 'input',
      optional: true,
      regex: '^\\d+$',
      format: function (value) {
        return 'x' + value;
      }
    },
    {
      placeHolder: 'Text?',
      action: 'input',
      optional: true,
      regex: '^.+$',
      format: function (value) {
        return '?text=' + encodeURIComponent(value);
      }
    },
    {
      placeHolder: 'Text Color (#RRGGBB)?',
      action: 'input',
      optional: true,
      regex: '^#([A-Fa-f0-9]{6})$',
      format: function (value) {
        return '/' + value.replace('#', '');
      }
    },
    {
      placeHolder: 'Background Color (#RRGGBB)?',
      action: 'input',
      optional: true,
      regex: '^#([A-Fa-f0-9]{6})$',
      format: function (value) {
        return '/' + value.replace('#', '');
      }
    }]
  },
  'dummy-image': {
    label: 'DummyImage',
    description: 'http://dummyimage.com',
    url: 'https://dummyimage.com/$0$1$4$3$5$2',
    attributes: [{
      placeHolder: 'Width?',
      action: 'input',
      regex: '^\\d+$'
    }, {
      placeHolder: 'Height?',
      action: 'input',
      regex: '^\\d+$',
      format: function (value) {
        return 'x' + value;
      }
    }, {
      placeHolder: 'Text?',
      action: 'input',
      regex: '^.+$',
      optional: true,
      format: function (value) {
        return '?text=' + encodeURIComponent(value);
      }
    }, {
      placeHolder: 'Text Color (#RRGGBB)?',
      action: 'input',
      optional: true,
      regex: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
      format: function (value) {
        return '/' + value.replace('#', '');
      }
    }, {
      placeHolder: 'Background Color (#RRGGBB)?',
      action: 'input',
      optional: true,
      regex: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
      format: function (value) {
        return '/' + value.replace('#', '');
      }
    }, {
      action: 'select',
      placeHolder: 'Image type?',
      items: [{
        label: 'gif',
        value: '.gif'
      }, {
        label: 'png',
        value: '.png'
      }, {
        label: 'jpg',
        value: '.jpg'
      }]
    }]
  },
  'lorem-flickr': {
    label: 'LoremFlickr',
    description: 'http://loremflickr.com',
    url: 'http://loremflickr.com$3$0$1$2',
    attributes: [{
      placeHolder: 'Width?',
      action: 'input',
      regex: '^\\d+$',
      format: function (value) {
        return '/' + value;
      }
    }, {
      placeHolder: 'Height?',
      action: 'input',
      regex: '^\\d+$',
      format: function (value) {
        return '/' + value;
      }
    }, {
      placeHolder: 'Search for Flickr keyword',
      action: 'input',
      optional: true,
      regex: '^.+$',
      format: function (value) {
        return '/' + value;
      }
    }, {
      action: 'select',
      placeHolder: 'Select a modifer',
      optional: true,
      items: [{
        label: 'Grayscale',
        value: 'g'
      }, {
        label: 'Pixelated',
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
      }],
      format: function (value) {
        return '/' + value;
      }
    }]
  },
  'unsplash.it': {
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
  },
  'fake-images-please': {
    label: 'Fake Images Please',
    description: 'http://fakeimg.pl',
    attributes: [{
      action: 'input',
      placeHolder: 'Width'
    }, {
      action: 'input',
      placeHolder: 'Height'
    }, {
      action: 'input',
      placeHolder: 'Text (optional)'
    }, {
      action: 'input',
      placeHolder: 'Text Color (#RRGGBB)'
    }, {
      action: 'input',
      placeHolder: 'Text Alpha (0-255)'
    }, {
      action: 'input',
      placeHolder: 'Background Color (#RRGGBB)'
    }, {
      action: 'input',
      placeHolder: 'Background Alpha (0-255)'
    }, {
      action: 'select',
      placeHolder: 'Choose a font',
      items: [{
        label: 'Lobster',
        description: '(default)'
      }, {
        label: 'Bebas'
      }, {
        label: 'Museo'
      }]
    }]
  },
  'placeskull': {
    label: 'placeskull',
    description: 'http://placeskull.com',
    attributes: [{
      action: 'input',
      placeHolder: 'Width'
    }, {
      action: 'input',
      placeHolder: 'Height'
    }, {
      action: 'input',
      placeHolder: 'Skull id (0-25?)'
    }, {
      action: 'input',
      placeHolder: 'Background Color (#RRGGBB)'
    }, {
      action: 'boolean',
      placeHolder: 'Pring image dimensions?',
      items: [{
        label: 'Yes',
      }, {
        label: 'No'
      }]
    }]
  },
  'pipsum': {
    label: 'Pipsum',
    description: 'http://pipsum.com',
    url: 'http://pipsum.com/$0$1',
    attributes: [{
      placeHolder: 'Width?',
      action: 'input',
      regex: '^\\d+$'
    }, {
      placeHolder: 'Height?',
      action: 'input',
      regex: '^\\d+$',
      format: function (value) {
        return 'x' + value + '.jpg';
      }
    }]
  }
};

module.exports = services;