const vscode = require('vscode');

let activate = (context) => {

  let window = vscode.window;

  let disposable = vscode.commands.registerCommand('placeholderImages.placeholderImage', () => {
    let services = require('./services');

    window.showQuickPick(services, {
      'placeHolder': 'Choose a Placeholder Image service'
    }).then((service) => {

      if (typeof(service) === 'undefined') {
        console.error('No placeholder service was chosen');
        return false;
      }

      let chain = service.attributes.reduce((previous, attribute) => {

        return previous.then((previousValue) => {

          return new Promise((resolve, reject) => {
            window.showInputBox({
              'placeHolder': attribute.placeHolder
            }).then((value) => {
              resolve(value);
            }, (err) => {
              reject(err);
            });

          });
        });

      }, Promise.resolve('start'));

      chain.then((lastResult) => {
        console.log('last result was ' + lastResult);
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