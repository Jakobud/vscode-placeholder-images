const vscode = require('vscode');

let activate = (context) => {

  let window = vscode.window;

  let disposable = vscode.commands.registerCommand('placeholderImages.placeholderImage', () => {
    let services = require('./services');

    // Services quick pick
    window.showQuickPick(services, {
        "placeHolder": "Choose a Placeholder Image service"
      })
      .then((service) => {
        console.log(service);
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