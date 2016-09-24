const vscode = require('vscode');

let activate = (context) => {

  let window = vscode.window;

  let disposable = vscode.commands.registerCommand('placeholderImages.placeholderImage', () => {

    // Import services
    let services = require('./services');

    // Choose from available services
    window.showQuickPick(services, {
      'placeHolder': 'Choose a Placeholder Image service'
    }).then((service) => {

      // No service was chosen
      if (typeof(service) === 'undefined') {
        console.error('No placeholder service was chosen');
        return false;
      }

      // Loop through service attributes
      let chain = service.attributes.reduce((previous, attribute) => {

        return previous.then((previousValue) => {
          return new Promise((resolve, reject) => {

            // Take appropriate action for attribute type
            switch (attribute.type) {

              case 'input':
                // Input attribute value
                window.showInputBox({
                  placeHolder: attribute.placeHolder
                }).then((value) => {

                  // No input was specified
                  if (typeof(value) === 'undefined') {
                    reject('No input value was specified');
                    return false;
                  }

                  console.log(typeof(value));
                  value = parseInt(value);
                  console.log(typeof(value));
                  attribute.value = value;
                  resolve();

                }, (err) => {
                  reject(err);
                });

                break;

              case 'select':
                // Pick attribute value
                window.showQuickPick(attribute.items, {
                  placeHolder: attribute.placeHolder
                }).then((value) => {

                  if (typeof(value) === 'undefined') {
                    reject('No value was selected');
                    return false;
                  }

                  attribute.value = value;
                  resolve();

                }, (err) => {
                  reject(err);
                })

                break;

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

// this method is called when your extension is deactivated
let deactivate = () => {}
exports.deactivate = deactivate;