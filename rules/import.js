module.exports = {
  // add overwrites/additions for 'plugin:import/recommended'
  rules: {
    'import/no-unresolved': [ 'error', {
      commonjs: true,
      amd:      false,
    }],
    'import/order': [ 2, {
      'newlines-between': 'always',
      groups:             [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index' ],
    }],
    'sort-imports':         [ 2, {
      ignoreCase:            false,
      ignoreDeclarationSort: true,
      ignoreMemberSort:      true,
      memberSyntaxSortOrder: [ 'single', 'all', 'multiple', 'none' ],
    }],
  },
};
