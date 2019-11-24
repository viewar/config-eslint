module.exports = {
  // add overwrites/additions for 'plugin:promise/recommended'
  rules: {
    'promise/always-return':   'error', // ensure return values
    'promise/catch-or-return': 'error', // ensure error handling
    'promise/no-return-wrap':  'error', // forbid return of resolve / reject
    'promise/param-names':     'error', // enforce param naming: 'resolve()' and 'reject()'
    'promise/no-new-statics':  'error', // dont use new keyword for static functions
    'promise/valid-params':    'error', // call with the proper number of arguments

    'promise/no-promise-in-callback': 'warn', // do not mix styles
    'promise/no-callback-in-promise': 'warn', // do not mix styles
    'promise/no-return-in-finally':   'warn', // finally-return never gets handled
    'promise/no-nesting':             'warn', // use other paralell/seriell helpers like `Promise.all()`

    'promise/no-native': 'off', // allow use of `Promise()` without import (injected by babel)

    // ? TO BE RETHOUGHT
    // 'promise/avoid-new':              'warn',
  },
};
