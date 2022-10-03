module.exports = {
    'env': {
        'browser'  : true,
        'commonjs' : true,
        'es2021'   : true,
        'node'     : true
    },
    'extends'   : 'eslint:recommended',
    'overrides' : [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
      'max-len': [ 'error', { 
        'code'                   : 120, 
        'ignoreStrings'          : true,
        'ignoreComments'         : true,
        'ignoreUrls'             : true,
        'ignoreTemplateLiterals' : true,
        'ignoreRegExpLiterals'   : true
      } ],
      'no-continue'                 : 'off',
      'no-restricted-globals'       : 'off',
      'radix'                       : 'off',
      'linebreak-style'             : 'off',
      'space-before-function-paren' : 'off',
      'no-await-in-loop'            : 'off',
      'no-restricted-syntax'        : 'off',
      'no-throw-literal'            : 'off',
      'no-param-reassign'           : 'off',
      'arrow-body-style'            : 'off',
      'array-bracket-spacing'       : [ 2, 'always' ],
      'no-unused-vars'              : 'off',
      'key-spacing'                 : [
        'error', {
          'align': { 'beforeColon': true, 'afterColon': true, 'on': 'colon' }
        }
      ],
      'global-require'            : 'off',
      'import/no-dynamic-require' : 'off',
      'quotes'                    : [ 'error', 'single', { 'allowTemplateLiterals': true } ],
      'class-methods-use-this'    : 'off',
      'camelcase'                 : 'off',
      'no-constant-condition'     : [
        'error', {
            checkLoops: false,
          },
      ],
      'newline-per-chained-call': 'off',
    }
}
