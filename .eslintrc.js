/* eslint-disable */
module.exports = {
  extends: [
    "react-app",
    "react-app/jest",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    process: 'readonly',
  },
  settings: {
    'import/extensions': ['.js'],
  },
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
    "comma-dangle": ["warn", "always-multiline"],
    'eol-last': 'warn',
    'react/sort-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'linebreak-style': 0,
    'no-shadow': 'off',
    semi: ['warn', 'always'],
    'semi-style': ['warn', 'last'],
    'max-len': ['warn', {
      code: 120,
    }],
    'id-length': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'no-unused-vars': ['warn', {
      ignoreRestSiblings: true,
    }],
    'import/no-unresolved': 'error',
    'import/namespace': ['error', {
      allowComputed: true,
    }],
    'import/exports-last': 'warn',
    'import/group-exports': 'warn',
    'import/no-default-export': 'warn',
    'import/order': ['warn', {
      groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index'],
    }],
    'react-hooks/exhaustive-deps': 'off',
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/boolean-prop-naming': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-handler-names': 'off',
    'space-infix-ops': 'error',
    'jsx-a11y/no-autofocus': ['warn', {
      ignoreNonDOM: true,
    }],
    'prefer-named-capture-group': 'off',
    'react/jsx-wrap-multilines': ['warn', {
      condition: 'parens',
      logical: 'parens',
    }],
    'object-curly-spacing': ['warn', 'always'],
    'no-trailing-spaces': ['warn', {
      skipBlankLines: false,
    }],
    'import/no-useless-path-segments': ['warn', {
      noUselessIndex: false,
    }],
    'import/no-cycle': ['warn'],
    'import/no-unresolved': 'error',
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-indent-props': ['warn', 'first'],
    'react/jsx-indent': ['warn', 2],
    'react/jsx-max-props-per-line': ['warn', {
      maximum: 2,
      when: 'multiline',
    }],
    'react/jsx-no-useless-fragment': 'off',
    'quotes': ['warn', 'single'],
    'implicit-arrow-linebreak': ['warn', 'beside'],
  },
};
