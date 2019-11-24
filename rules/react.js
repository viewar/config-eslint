module.exports = {
  rules: {
    //* since we use config.resolve.modules for our alternate rel paths,
    //* plugin-node triggers on importing without path-prefix;
    //* workaround for #8
    'node/no-missing-import': 0,

    'react/jsx-closing-bracket-location': [ 1, 'line-aligned' ],

    'react/default-props-match-prop-types':       [ 'warn' ],
    'react/display-name':                         [ 'error' ],
    'react/no-access-state-in-setstate':          [ 'error' ],
    'react/no-array-index-key':                   [ 'error' ],
    'react/no-children-prop':                     [ 'error' ],
    'react/no-danger':                            [ 'error' ],
    'react/no-danger-with-children':              [ 'error' ],
    'react/no-deprecated':                        [ 'error' ],
    'react/no-direct-mutation-state':             [ 'error' ],
    'react/no-did-mount-set-state':               [ 'error' ],
    'react/no-find-dom-node':                     [ 'warn' ],
    'react/no-is-mounted':                        [ 'error' ],
    'react/no-redundant-should-component-update': [ 'error' ],
    'react/no-render-return-value':               [ 'error' ],
    'react/no-typos':                             [ 'error' ],
    'react/no-string-refs':                       [ 'error' ],
    'react/no-this-in-sfc':                       [ 'error' ],
    'react/no-unescaped-entities':                [ 'error' ],
    'react/no-unknown-property':                  [ 'error' ],
    'react/no-unsafe':                            0,
    'react/no-unused-prop-types':                 [ 'error' ],
    'react/no-unused-state':                      [ 'error' ],
    'react/no-will-update-set-state':             [ 'error' ],
    'react/prefer-read-only-props':               [ 'error' ],
    'react/prop-types':                           [ 'error' ],
    'react/require-default-props':                [ 'error' ],
    'react/require-render-return':                [ 'error' ],
    'react/self-closing-comp':                    [ 'error' ],
    'react/sort-comp':                            [ 'error' ],
    // allow static state var
    'react/state-in-constructor':                 0,
    'react/static-property-placement':            [ 'error' ],
    'react/style-prop-object':                    [ 'error' ],
    'react/void-dom-elements-no-children':        [ 'error' ],
    // JSX RULES
    'react/jsx-boolean-value':                    [ 'error' ],
    'react/jsx-closing-tag-location':             [ 'error' ],
    'react/jsx-curly-spacing':                    [ 'error', 'never' ],
    'react/jsx-equals-spacing':                   [ 'error', 'never' ],
    'react/jsx-first-prop-new-line':              [ 'error', 'multiline-multiprop' ],
    'react/jsx-indent':                           [ 'error', 2 ],
    'react/jsx-indent-props':                     [ 'error', 2 ],
    'react/jsx-key':                              [ 'error' ],
    'react/jsx-max-depth':                        [ 'error', { max: 5 }],
    'react/jsx-no-bind':                          [ 'error' ],
    'react/jsx-no-comment-textnodes':             [ 'error' ],
    'react/jsx-no-duplicate-props':               [ 'error' ],
    'react/jsx-no-target-blank':                  [ 'error' ],
    'react/jsx-no-undef':                         [ 'error' ],
    'react/jsx-one-expression-per-line':          0,
    'react/jsx-curly-brace-presence':             [
      'error',
      {
        props:    'ignore',
        children: 'ignore',
      },
    ],
    'react/jsx-pascal-case':           [ 'error' ],
    'react/jsx-props-no-multi-spaces': [ 'error' ],
    'react/jsx-sort-default-props':    0,
    'react/jsx-sort-props':            0,
    'react/jsx-tag-spacing':           [
      'error',
      {
        closingSlash:      'never',
        beforeSelfClosing: 'always',
        afterOpening:      'never',
        beforeClosing:     'never',
      },
    ],
    'react/jsx-uses-react':      [ 'error' ],
    'react/jsx-uses-vars':       [ 'error' ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment:  'parens-new-line',
        'return':      'parens-new-line',
        arrow:       'parens-new-line',
        condition:   'parens-new-line',
      },
    ],

    // unsure - may be changed
    'react/jsx-props-no-spreading': [ 'warn' ],
    'react/jsx-filename-extension': [ 'error', { extensions: [ '.jsx', '.js', '.ts' ]}],
    'react/jsx-curly-newline':      [
      'error',
      {
        multiline:  'consistent',
        singleline: 'consistent',
      },
    ],
    'react/jsx-max-props-per-line':    0,
    'react/jsx-handler-names':         0,
    'react/jsx-child-element-spacing': 0,
    'react/react-in-jsx-scope':        [ 'error' ], // can be skipped with webpack global module!?
    'react/prefer-es6-class':          [ 'warn' ],
    'react/prefer-stateless-function': [ 'error', { ignorePureComponents: true }],

    // * HOOKS
    'react-hooks/rules-of-hooks':  'error',
    'react-hooks/exhaustive-deps': 'warn',
    // TODO: coming soon (next version)
    // "react/jsx-fragments": ["error", "element"],
    // "react/jsx-no-useless-fragment": ["error"]
    // DEPRECATED:
    // Definition for rule 'react/prefer-read-only-props' was not found.eslint(react/prefer-read-only-props)
    // Definition for rule 'react/state-in-constructor' was not found.eslint(react/state-in-constructor)
    // Definition for rule 'react/static-property-placement' was not found.eslint(react/static-property-placement)
    // Definition for rule 'react/jsx-props-no-multi-spaces' was not found.eslint(react/jsx-props-no-multi-spaces)
    // Definition for rule 'react/jsx-props-no-spreading' was not found.eslint(react/jsx-props-no-spreading)
    // Definition for rule 'react/jsx-curly-newline' was not found.eslint(react/jsx-curly-newline)
  },
};
