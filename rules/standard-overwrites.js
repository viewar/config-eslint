module.exports = {
  rules: {
    camelcase: [ 'error', {
      ignoreDestructuring: true,
      properties:          'never', // ignores properites case
    }],
    'block-spacing': [ 'error', 'always' ],
    yoda:            [ 'error', 'never' ],

    'no-undefined':   'error', // use "null" instead of undefined
    'no-undef':       [ 'error' ],
    'no-unused-vars': [ 'warn', {
      vars:                'local',
      caughtErrors:        'none',
      args:                'none',
      ignoreRestSiblings:  true,
      varsIgnorePattern:  'React|styles|cx',
    }],

    'no-unused-expressions': [ 'error', {
      allowShortCircuit: true,
      allowTernary:      true,
    }],
    'no-mixed-operators':       [ 'error', {
      groups: [
        [ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
        // [ '&&', '||' ],
        [ 'in', 'instanceof' ],
      ],
      allowSamePrecedence: true,
    }],
    // 'standard/no-callback-literal': 0,
  },
};
