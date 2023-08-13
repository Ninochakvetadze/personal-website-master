const VALID_EMAIL_ENDINGS = ['gmail.com', 'outlook.com', 'yandex.ru']

const validate = (email) => {
  for (const ending of VALID_EMAIL_ENDINGS) {
    if (email.endsWith(ending)) {
      return true
    }
  }
  return false
}

const validateAsync = async (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(validate(email))
    }, 1000)
  })
}

const validateWithThrow = (email) => {
  if (!validate(email)) {
    throw new Error('Invalid email')
  }
  return true
}

const validateWithLog = (email) => {
  const isValid = validate(email)
  console.log(`Email validation result: ${isValid}`)
  return isValid
}

export { validate, validateAsync, validateWithThrow, validateWithLog }
