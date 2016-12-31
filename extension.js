const vscode = require('vscode')
const window = vscode.window

const Promise = require('bluebird')
const _ = require('lodash')
const fs = require('fs')
const path = require('path')

// Import services
let services = []
let servicesDir = path.join(__dirname, 'services')
try {
  let files = fs.readdirSync(servicesDir)
  for (let file of files) {
    services.push(require(path.join(servicesDir, file)))
  }
} catch (error) {
  console.log(error)
}

let activate = (context) => {
  let disposable = vscode.commands.registerCommand('placeholderImages.placeholderImage', () => {
    // Choose from available services
    window.showQuickPick(services, {
      'placeHolder': 'Choose a Placeholder Image service'
    }).then((service) => {
      // No service was chosen
      if (typeof (service) === 'undefined') {
        console.error('No placeholder service was chosen')
        return false
      }

      // Clone the service object
      service = _.cloneDeep(service)

      // Loop through service attributes
      let chain = Object.keys(service.attributes).reduce((previous, key) => {
        let attribute = service.attributes[key]
        return previous.then((previousValue) => {
          return new Promise((resolve, reject) => {
            // Take appropriate action for attribute type
            switch (attribute.action) {

              // Input attribute
              case 'input':
                return inputAttributeAction(attribute, resolve, reject)

              // Select attribute
              case 'select':
                return selectAttributeAction(attribute, resolve, reject)

              // Select Yes/No attribute
              case 'boolean':
                return booleanAttributeAction(attribute, resolve, reject)

              default:
                break
            }
          })
        })
      }, Promise.resolve())

      // End of the reducer chain
      chain.then(() => {
        console.log(service)
      }).catch((err) => {
        console.error(err)
      })
    }, (err) => {
      console.error(err)
    })
  })

  context.subscriptions.push(disposable)
}
exports.activate = activate

const inputAttributeAction = (attribute, resolve, reject) => {
  // Add optional to placeHolder
  const placeHolder = attribute.optional ? attribute.placeHolder + ' (optional)' : attribute.placeHolder

  let next = false
  promiseWhile(() => {
    return !next
  }, () => {
    return new Promise((resolve, reject) => {
      window.showInputBox({
        placeHolder: placeHolder
      }).then((value) => {
        // No input was specified
        if (typeof (value) === 'undefined') {
          return reject('No input value specified')
        }

        // Trim the specified value
        value = value.trim()

        // Validation via regex
        const regexType = new RegExp(attribute.regex)

        // Regex test or is the value optional
        if (regexType.test(value)) {
          // Optional value formatting
          // if (attribute.format) {
          //   value = attribute.format(value);
          // }

          // Replace url placeholder
          attribute.value = value

          // service.url = service.url.replace('$' + index, value);

          // Move to the next attribute
          next = true

          // Accept if value is optional
        } else if (attribute.optional === true && value.length === 0) {
          // Replace url placeholder
          // service.url = service.url.replace('$' + index, '');
          attribute.value = value

          // Move to the next attribute
          next = true
        }

        return resolve()
      }, (err) => {
        return reject(err)
      })
    })
  }).then(() => {
    return resolve()
  }).catch((err) => {
    console.error(err)
  })
}

const selectAttributeAction = (attribute, resolve, reject) => {
  // Add 'None' item if attribute is optional
  if (attribute.optional) {
    attribute.items.push('None')
  }

  // Pick attribute value
  window.showQuickPick(attribute.items, {
    placeHolder: attribute.placeHolder
  }).then((value) => {
    if (typeof (value) === 'undefined') {
      return reject('No value was selected')
    }

    value = value.value

    // Ignore value
    if (value === 'None') {
      // Remove url placeholder
      service.url = service.url.replace('$' + index, '')
    } else {
      // Optional value formatting
      if (attribute.format) {
        value = attribute.format(value)
      }

      // Replace url placeholder
      service.url = service.url.replace('$' + index, value)
    }

    return resolve()
  }, (err) => {
    return reject(err)
  })
}

const booleanAttributeAction = (attribute, resolve, reject) => {
  // Pick attribute value
  window.showQuickPick(['Yes', 'No'], {
    placeHolder: attribute.placeHolder
  }).then((value) => {
    if (typeof (value) === 'undefined') {
      return reject('No value was selected')
    }

    if (value === 'Yes') {
      // Optional value formatting
      if (attribute.format) {
        value = attribute.format(value)
      }

      // Replace url placeholder with value
      service.url = service.url.replace('$' + index, value)
    } else {
      // Remove url placeholder
      service.url = service.url.replace('$' + index, '')
    }

    return resolve()
  }, (err) => {
    return reject(err)
  })
}

const promiseWhile = (predicate, action) => {
  function loop () {
    if (!predicate()) return
    return Promise.resolve(action()).then(loop)
  }
  return Promise.resolve().then(loop)
}

// this method is called when your extension is deactivated
let deactivate = () => { }
exports.deactivate = deactivate
