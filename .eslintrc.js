module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-closing-bracket-newline': 'error',
    'vue/order-in-components': 'error',
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: ['VAttribute']
      }
    ]
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
