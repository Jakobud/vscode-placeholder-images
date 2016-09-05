var vscode = require('vscode');

function activate(context) {

    var disposable = vscode.commands.registerCommand('placeholderImages.placeholderImage', function() {

        var window = vscode.window;
        var services = require('./services');

        // Build array of services
        var pickItems = [];
        for (var index in services) {
            if (services.hasOwnProperty(index)) {
                var element = services[index];
                pickItems.push(element.name);
            }
        }

        // Services quick pick
        window.showQuickPick(pickItems, {
                "placeHolder": "Choose a Placeholder Image service"
            })
            .then(function(service) {
                console.log(service);
                console.log(services);
            });
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;