module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-func-assign': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-underscore-dangle': 'off',
    'no-empty': 'off',
    'no-magic-numbers': 'off',
    'no-extra-semi': 'off',
    'no-restricted-globals': 'off',
    'no-shadow': 'off',
    camelcase: 'off'
  }
}
