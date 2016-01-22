var child_process = require('child_process')

module.exports = function (filepath) {
  return new Promise(function (resolve, reject) {
    var child = child_process.spawn('./bin/parser', [filepath], {
      stdio: [
        0,
        'pipe',
        2
      ]
    })

    var output = []

    child.stdout.on('data', function (chunk) {
      output.push(JSON.parse(chunk))
    })

    child.stdout.on('close', function (code, signal) {
      if (code) {
        reject(new Error(code))
      } else {
        resolve(output[0])
      }
    })

    child.stdout.on('error', function (error) {
      throw error
    })
  })
}
