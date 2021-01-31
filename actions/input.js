const vscode = require('vscode')
const window = vscode.window

module.exports = async function (options) {
    const pattern = new RegExp(options.regex)

    let value = await window.showInputBox({
        ignoreFocusOut: true,
        placeHolder: options.placeHolder,
        prompt: options.prompt ? options.prompt : undefined,
        validateInput(value) {
            // Pass validation if no regex specified
            if (typeof(options.regex) === 'undefined') {
                return undefined
            }

            // If value passes regex or is optional and blank, then pass validation
            if (pattern.test(value) || (options.required !== true && value.trim() === '')) {
                return undefined
            } else {
                return options.invalid
            }
        }
    })

    // No input was specified
    if (typeof (value) === 'undefined') {
        return undefined
    }

    return value.trim()
}