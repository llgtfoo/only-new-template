module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        '@ourea/eslint-config-tq/vue',
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": 'module',
        "parser": "@typescript-eslint/parser",
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        'no-magic-numbers': 0,
        'vue/html-closing-bracket-newline': 0,
        'vue/html-self-closing': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': 0,
        'space-before-function-paren': 0
    }
};
