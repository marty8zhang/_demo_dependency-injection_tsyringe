module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'class-methods-use-this': 'warn',
    'max-classes-per-file': 'warn',
    'no-empty-function': 0,
    '@typescript-eslint/no-empty-function': 1,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 1,
    'no-useless-constructor': 0,
    '@typescript-eslint/no-useless-constructor': 1,
    semi: 0,
    '@typescript-eslint/semi': 1,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
