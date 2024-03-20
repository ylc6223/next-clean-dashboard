module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['**/.next/**', '**/node_modules/**'],
  root: true,
  settings: {
    next: {
      rootDir: ['basics/*/', 'dashboard/*/', 'seo/'],
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
