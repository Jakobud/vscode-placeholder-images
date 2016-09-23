var vscode = require('vscode');

function activate(context) {

    var disposable = vscode.commands.registerCommand('placeholderImages.placeholderImage', function() {

        var window = vscode.window;
        var services = require('./services');

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
function deactivate() {}
exports.deactivate = deactivate;