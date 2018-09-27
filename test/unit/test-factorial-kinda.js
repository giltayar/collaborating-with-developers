const factorial = require('../../lib/factorial')
const assert = require('assert')

assert.strict.equal(factorial(0), 1)
assert.strict.equal(factorial(1), 1)
assert.strict.equal(factorial(2), 2)
assert.strict.equal(factorial(5), 120)
