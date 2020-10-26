module.exports = {
  env: {
    node: true,
    browser: true,
  },
  globals: {
    use: true,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  ignorePatterns: ['!.eslintrc.js', 'dist'],
  rules: {
    semi: ['error', 'never'],
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
      },

    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'class-methods-use-this': 'off',
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
  },
}
