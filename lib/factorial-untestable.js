const fs = require('fs')

function writeFactorial (n, filename) {
  let result = 1

  for (let i = 1; i <= n; ++i) {
    result *= i
  }

  fs.writeFileSync(filename, result.toString())
}

module.exports = writeFactorial
