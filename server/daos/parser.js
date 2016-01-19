var child_process = require('child_process')

module.exports = function (filepath) {
  return new Promise(function (resolve, reject) {
    var child = child_process.spawn('./parser', [filepath], {
      stdio: [
        0,
        'pipe',
        2
      ]
    })

    var output = []

    child.stdout.on('data', function (chunk) {
      output.push(chunk.toString())
    })

    child.stdout.on('close', function (code, signal) {
      if (code) {
        reject(new Error(code))
      } else {
        resolve(output)
      }
    })

    child.stdout.on('error', function (error) {
      throw error
    })
  })
}
