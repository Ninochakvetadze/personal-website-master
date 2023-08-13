import { expect } from 'chai'
import * as sinon from 'sinon'
import { validate, validateAsync, validateWithThrow, validateWithLog } from '../email-validator'
/* eslint-disable no-undef */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line no-undef

describe('validate', () => {
  it('should return true for valid email endings', () => {
    expect(validate('user@gmail.com')).to.be.true
    expect(validate('user@outlook.com')).to.be.true
    expect(validate('user@yandex.ru')).to.be.true
  })

  it('should return false for invalid email endings', () => {
    expect(validate('user@yahoo.com')).to.be.false
    expect(validate('user@edu.com')).to.be.false
  })
})

describe('validateAsync', () => {
  it('should return true for valid email endings', async () => {
    const result = await validateAsync('user@gmail.com')
    expect(result).to.be.true
  })

  it('should return false for invalid email endings', async () => {
    const result = await validateAsync('user@yahoo.com')
    expect(result).to.be.false
  })
})

describe('validateWithThrow', () => {
  it('should not throw for valid email endings', () => {
    const result = validateWithThrow('user@gmail.com')
    expect(result).to.be.true
  })

  it('should throw this error for invalid email endings', () => {
    expect(() => validateWithThrow('user@yahoo.com')).to.throw('Invalid email')
  })
})

describe('validateWithLog', () => {
  let consoleLogStub

  beforeEach(() => {
    consoleLogStub = sinon.stub(console, 'log')
  })

  afterEach(() => {
    consoleLogStub.restore()
  })

  it('should log true for valid email endings', () => {
    validateWithLog('user@gmail.com')
    expect(consoleLogStub.calledWith('Email validation result: true')).to.be.true
  })

  it('should log false for invalid email endings', () => {
    validateWithLog('user@yahoo.com')
    expect(consoleLogStub.calledWith('Email validation result: false')).to.be.true
  })
})
