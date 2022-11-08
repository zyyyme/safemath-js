module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true
  },
  extends: ['standard', 'eslint:recommended', 'plugin:promise/recommended'],
  plugins: ['standard', 'promise'],
  ignorePatterns: ['dist'],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-labels': ['error', { allowLoop: true }],
    'no-console': 'error',
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'object-curly-newline': ['error', {
      ExportDeclaration: 'never'
    }],
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always'
    }],
    'dot-notation': 0
  },
  overrides: [
    {
      files: ['**/*.ts'],
      env: {
        node: true
      },
      extends: [
        'standard',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      parserOptions: {
        parser: '@typescript-eslint',
        sourceType: 'module',
        ecmaVersion: 2018
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/member-delimiter-style': [
          'error', {
            multiline: { delimiter: 'none' },
            singleline: { delimiter: 'comma' }
          }
        ],
        // built-in eslint for that is good enough, and respects _fields (underscored)
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/semi': ['warn', 'never'],
        'no-useless-constructor': 0,
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-interface': 'off'
      }
    }
  ]
}
