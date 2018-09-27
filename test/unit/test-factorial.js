
const { describe, it } = require('mocha')
const { expect } = require('chai')

const factorial = require('../../lib/factorial')

describe('factorial', () => {
  it('should handle 0', () => {
    expect(factorial(0)).to.equal(1)
  })
  it('should handle 1', () => {
    expect(factorial(1)).to.equal(1)
  })
  it('should handle 2', () => {
    expect(factorial(2)).to.equal(2)
  })
  it('should handle 5', () => {
    expect(factorial(5)).to.equal(120)
  })
})
