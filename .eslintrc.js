module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['src/**/*.test.js', 'src/**/*.test.ts'],
  rules: {},
}
