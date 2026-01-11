import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
  ...nextVitals,
  {
    rules: {
      'no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
    },
  },
  {
    files: ['cypress.config.js'],
    rules: {
      'no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
      }],
    },
  },
  {
    ignores: [
      // Default ignores of eslint-config-next:
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      // Additional ignores:
      'public/**',
      'node_modules/**',
    ],
  },
]

export default eslintConfig
