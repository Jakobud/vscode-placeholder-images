const vscode = require('vscode')
const window = vscode.window

module.exports = async function (options) {
    let value = await window.showQuickPick(['Yes', 'No'], {
        ignoreFocusOut: true,
        placeHolder: options.placeHolder
    })

    // No input was specified
    if (typeof (value) === 'undefined') {
        return undefined
    }

    return value === 'Yes'
}