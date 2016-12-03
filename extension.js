const vscode = require('vscode');
const Promise = require('bluebird');

const window = vscode.window;

let activate = (context) => {

  let disposable = vscode.commands.registerCommand('placeholderImages.placeholderImage', () => {

    // Import services
    let services = require('./services');

    var sum = 0,
      stop = 10;

    promiseWhile(function () {
      // Condition for stopping
      return sum < stop;
    }, function () {
      // The function to run, should return a promise
      return new Promise(function (resolve, reject) {
        // Arbitrary 250ms async method to simulate async process
        setTimeout(function () {
          sum++;
          // Print out the sum thus far to show progress
          console.log(sum);
          resolve();
        }, 2000);
      });
    }).then(function () {
      // Notice we can chain it because it's a Promise, this will run after completion of the promiseWhile Promise!
      console.log("Done");
    });

    return false;

    // Choose from available services
    window.showQuickPick(services, {
      'placeHolder': 'Choose a Placeholder Image service'
    }).then((service) => {

      // No service was chosen
      if (typeof (service) === 'undefined') {
        console.error('No placeholder service was chosen');
        return false;
      }

      // Loop through service attributes
      let chain = service.attributes.reduce((previous, attribute) => {

        return previous.then((previousValue) => {
          return new Promise((resolve, reject) => {

            // Take appropriate action for attribute type
            switch (attribute.action) {

              case 'input':

                return inputAttributeAction(attribute, resolve, reject);

              case 'select':

                return selectAttributeAction(attribute, resolve, reject);

              default:
                break;
            }

            if (result.success === false) {
              return reject(result.reason);
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

const inputAttributeAction = (attribute, resolve, reject) => {

  // Input attribute value
  window.showInputBox({
    placeHolder: attribute.placeHolder
  }).then((value) => {

    // No input was specified
    if (typeof (value) === 'undefined') {
      return reject('No input value specified');
    }

    // If integer type
    if (attribute.type === 'int') {
      value.replace(' ', '');
      value = parseInt(value);
    }

    // Is the value a value integer
    if (value !== null && value >= 0) {
      return resolve(value);
    } else {

    }

  }, (err) => {
    return reject(err);
  });

}

const selectAttributeAction = (attribute) => {

  // Pick attribute value
  window.showQuickPick(attribute.items, {
    placeHolder: attribute.placeHolder
  }).then((value) => {

    if (typeof (value) === 'undefined') {
      return reject('No value was selected');
    }

    attribute.value = value;
    return resolve();

  }, (err) => {
    return reject(err);
  })

}

const promiseWhile = function (condition, action) {

  let loop = function () {
    if (!condition()) return Promise.resolve();
    return Promise.resolve(action())
      .then(loop)
      .catch(Promise.reject);
  };

  process.nextTick(loop);

  return new Promise();
};


// this method is called when your extension is deactivated
let deactivate = () => { }
exports.deactivate = deactivate;