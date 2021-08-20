module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended', // recommended rules for eslint
    'plugin:@typescript-eslint/recommended', // recommended rules for typescript eslint
    'airbnb-base', // airbnb rules
    'plugin:prettier/recommended', // prettier recommended rules
    'plugin:import/errors', // error rules
    'plugin:import/warnings', // warnings rules
    'plugin:import/typescript', // typescript rules
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': 'error', // show error for prettier rules
    'import/extensions': 'off', // switch off files extension during import
    'no-console': 'off',
  },
};
