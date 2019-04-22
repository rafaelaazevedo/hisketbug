module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
        'standard',
        'plugin:testcafe/recommended'
    ],
    'plugins': [
        'testcafe'
    ],
  'globals': {
    'expect': true,
    'browser': true,
    '_': false
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2019
  }
}
