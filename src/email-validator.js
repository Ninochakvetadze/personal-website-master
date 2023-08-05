const VALID_EMAIL_ENDINGS = ['gmail.com', 'outlook.com', 'yandex.ru']

const validate = (email) => {
  for (const ending of VALID_EMAIL_ENDINGS) {
    if (email.endsWith(ending)) {
      return true
    }
  }
  return false
}

export default validate
