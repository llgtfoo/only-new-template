module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  // 'extends': [
  //   'eslint:recommended',
  //   'plugin:vue/essential',
  //   'plugin:@typescript-eslint/recommended',
  // ],
  'extends': '@ourea/eslint-config-tq/vue',
  'parserOptions': {
    'ecmaVersion': 12,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],
  'rules': {
    'no-magic-numbers': 0,
    'no-console': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-self-closing': 0,
    'no-debugger': 0,
  },
}
