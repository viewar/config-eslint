module.exports = {
  // add overwrites/additions for 'plugin:import/recommended'
  rules: {
    //
    // import-rules of 'eslint-config-standard@1.4.1' (MIT license)
    //
    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': [
      'error',
      {
        esmodule: true,
        commonjs: true,
        amd: false,
      },
    ],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',
    //
    // custom import-rules
    //
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        amd: false,
      },
    ],
    'import/order': [
      2,
      {
        'newlines-between': 'always',
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
      },
    ],
    'sort-imports': [
      2,
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['single', 'all', 'multiple', 'none'],
      },
    ],
  },
};
