import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})
const patchedConfig = fixupConfigRules([
  ...compat.extends('next/core-web-vitals'),
])

const eslintConfig = [
  ...patchedConfig,
  ...ts.configs.recommended,
  {
    ...prettierConfigRecommended,
    rules: {
      ...prettierConfigRecommended.rules,
      'prettier/prettier': [
        'error',
        { singleQuote: true, semi: false, arrowParens: 'avoid' },
      ],
    },
  },

  { ignores: ['.next/*'] },
]

export default eslintConfig
