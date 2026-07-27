import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

// ESLint réduit aux seules règles react-hooks (footguns React 19 : set-state-in-effect,
// refs, exhaustive-deps) que Biome ne couvre pas. Tout le reste (lint + format) passe par Biome.
// On utilise le parser typescript-eslint pour analyser les .ts/.tsx, sans activer ses règles.
const eslintConfig = [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { 'react-hooks': reactHooks },
    rules: reactHooks.configs.flat['recommended-latest'].rules,
  },
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'node_modules/**',
    ],
  },
];

export default eslintConfig;
