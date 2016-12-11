const vscode = require('vscode');
const window = vscode.window;

const Promise = require('bluebird');
const _ = require('lodash');

// Import services
const servicesData = require('./services');
let services = [];
for (let key of Object.keys(servicesData)) {
  services.push(servicesData[key]);
}

let activate = (context) => {

  let disposable = vscode.commands.registerCommand('placeholderImages.placeholderImage', () => {

    // Choose from available services
    window.showQuickPick(services, {
      'placeHolder': 'Choose a Placeholder Image service'
    }).then((service) => {

      // No service was chosen
      if (typeof (service) === 'undefined') {
        console.error('No placeholder service was chosen');
        return false;
      }

      // Clone the service object
      service = _.cloneDeep(service);

      // Loop through service attributes
      let chain = service.attributes.reduce((previous, attribute, index) => {

        return previous.then((previousValue) => {
          return new Promise((resolve, reject) => {

            // Take appropriate action for attribute type
            switch (attribute.action) {

              // Input attribute
              case 'input':
                return inputAttributeAction(service, index, resolve, reject);

              // Select attribute
              case 'select':
                return selectAttributeAction(service, index, resolve, reject);

              // Select Yes/No attribute
              case 'boolean':
                return booleanAttributeAction(service, index, resolve, reject);

              default:
                break;
            }

          });
        });

      }, Promise.resolve());

      // End of the reducer chain
      chain.then(() => {

        console.log(service);

      }).catch((err) => {
        console.error(err);
      })

    }, (err) => {
      console.error(err);
    });
  });

  context.subscriptions.push(disposable);
}
exports.activate = activate;

const inputAttributeAction = (service, index, resolve, reject) => {

  const attribute = service.attributes[index];

  // Add optional to placeHolder
  const placeHolder = attribute.optional ? attribute.placeHolder + ' (optional)' : attribute.placeHolder;

  let next = false;
  promiseWhile(() => {
    return !next;
  }, () => {

    return new Promise((resolve, reject) => {

      window.showInputBox({
        placeHolder: placeHolder
      }).then((value) => {

        // No input was specified
        if (typeof (value) === 'undefined') {
          return reject('No input value specified');
        }

        // Trim the specified value
        value = value.trim();

        // Validation via regex
        const regexType = new RegExp(attribute.regex);

        // Regex test or is the value optional
        if (regexType.test(value)) {

          // Optional value formatting
          if (attribute.format) {
            value = attribute.format(value);
          }

          //Replace url placeholder
          service.url = service.url.replace('$' + index, value);

          // Move to the next attribute
          next = true;

          // Accept if value is optional
        } else if (attribute.optional === true && value.length === 0) {

          // Replace url placeholder
          service.url = service.url.replace('$' + index, '');

          // Move to the next attribute
          next = true;
        }

        return resolve();

      }, (err) => {
        return reject(err);
      });

    });
  }).then(() => {
    return resolve();
  }).catch((err) => {
    console.error(err);
  });

}

const selectAttributeAction = (service, index, resolve, reject) => {

  const attribute = service.attributes[index];

  if (attribute.optional) {
    attribute.items.push('None');
  }

  // Pick attribute value
  window.showQuickPick(attribute.items, {
    placeHolder: attribute.placeHolder
  }).then((value) => {

    if (typeof (value) === 'undefined') {
      return reject('No value was selected');
    }

    // Ignore value
    if (value.label === 'None') {

      // Remove url placeholder
      service.url = service.url.replace('$' + index, '');

    } else {

      // Optional value formatting
      if (attribute.format) {
        value = attribute.format(value.label);
      }

      // Replace url placeholder
      service.url = service.url.replace('$' + index, value);

    }

    console.log(service.url);

    return resolve();

  }, (err) => {
    return reject(err);
  })

}

const booleanAttributeAction = (service, index, resolve, reject) => {

  const attribute = service.attributes[index];

  // Pick attribute value
  window.showQuickPick(['Yes', 'No'], {
    placeHolder: attribute.placeHolder
  }).then((value) => {

    if (typeof (value) === 'undefined') {
      return reject('No value was selected');
    }

    if (value === 'Yes') {

      // Optional value formatting
      if (attribute.format) {
        value = attribute.format(value);
      }

      // Replace url placeholder with value
      service.url = service.url.replace('$' + index, value);

    } else {

      // Remove url placeholder
      service.url = service.url.replace('$' + index, '');

    }

    return resolve();

  }, (err) => {
    return reject(err);
  })

}

const promiseWhile = (predicate, action) => {
  function loop() {
    if (!predicate()) return;
    return Promise.resolve(action()).then(loop);
  }
  return Promise.resolve().then(loop);
}

// this method is called when your extension is deactivated
let deactivate = () => { }
exports.deactivate = deactivate;