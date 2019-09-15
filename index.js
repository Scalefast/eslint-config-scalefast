module.exports = {
    'parserOptions': {
        'ecmaVersion': 2018,
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    'env': {
        'es6': true,
        'node': true,
        'browser': true
    },
    'plugins': [
        'promise'
    ],
    'extends': 'eslint:recommended',
    'globals': {
        'document': false,
        'window': false,
        'angular': false,
        '$': false
    },
    'rules': {
        'accessor-pairs' : 'error',
        'arrow-spacing' : "error",
        'block-spacing' : "error",
        'brace-style' : "error",
        'camelcase': [
            'error',
            {
                'properties': 'never'
            }
        ],
        'comma-dangle': [
            'error',
            {
                'arrays': 'only-multiline',
                'objects': 'only-multiline',
                'imports': 'only-multiline',
                'exports': 'only-multiline',
                'functions': 'only-multiline'
            }
        ],
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'comma-style': [
            'error',
            'last'
        ],
        'curly' : "error",
        'dot-location': [
            'error',
            'property'
        ],
        'eol-last': 'error',
        'eqeqeq': [
            'error',
            'always',
            {
                'null': 'ignore'
            }
        ],
        'func-call-spacing': [
            'error',
            'never'
        ],
        'generator-star-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'handle-callback-err': [
            'error',
            '^(err|error)$'
        ],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'VariableDeclarator': {
                    'var': 2,
                    'let': 2,
                    'const': 3
                },
                'outerIIFEBody': 1,
                'MemberExpression': 1,
                'FunctionDeclaration': {
                    'parameters': 1,
                    'body': 1
                },
                'FunctionExpression': {
                    'parameters': 1,
                    'body': 1
                },
                'CallExpression': {
                    'arguments': 'first'
                },
                'ArrayExpression': 1,
                'ObjectExpression': 1,
                'ImportDeclaration': 1,
                'flatTernaryExpressions': false,
                'ignoreComments': false
            }
        ],
        'key-spacing': [
            'error',
            {
                'beforeColon': true,
                'afterColon': true
            }
        ],
        'keyword-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'new-cap': [
            'error',
            {
                'newIsCap': true,
                'capIsNew': false
            }
        ],
        'new-parens': 'error',
        'no-array-constructor': 'error',
        'no-caller': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-parens': [
            'error',
            'functions'
        ],
        'no-floating-decimal': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': [
            'error',
            {
                'allowLoop': false,
                'allowSwitch': false
            }
        ],
        'no-lone-blocks': 'error',
        'no-mixed-operators': [
            'error',
            {
                'groups': [
                    [
                        '==',
                        '!=',
                        '===',
                        '!==',
                        '>',
                        '>=',
                        '<',
                        '<='
                    ],
                    [
                        '&&',
                        '||'
                    ],
                    [
                        'in',
                        'instanceof'
                    ]
                ],
                'allowSamePrecedence': true
            }
        ],
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
                'maxEOF': 0
            }
        ],
        'no-negated-in-lhs': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-path-concat': 'error',
        'no-proto': 'error',
        'no-return-assign': [
            'error',
            'except-parens'
        ],
        'no-return-await': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': [
            'error',
            {
                'defaultAssignment': false
            }
        ],
        'no-unused-expressions': [
            'error',
            {
                'allowShortCircuit': true,
                'allowTernary': true,
                'allowTaggedTemplates': true
            }
        ],
        'no-use-before-define': [
            'error',
            {
                'functions': false,
                'classes': false,
                'variables': false
            }
        ],
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': [
            'error',
            'always',
            {
                'arraysInObjects': false
            }
        ],
        'object-property-newline': [
            'error',
            {
                'allowMultiplePropertiesPerLine': true
            }
        ],
        'one-var': [
            'error',
            {
                'initialized': 'never'
            }
        ],
        'operator-linebreak': [
            'error',
            'after',
            {
                'overrides': {
                    '?': 'before',
                    ':': 'before'
                }
            }
        ],
        'padded-blocks': [
            'error',
            {
                'blocks': 'never',
                'switches': 'never',
                'classes': 'never'
            }
        ],
        'prefer-promise-reject-errors': 'error',
        'rest-spread-spacing': [
            'error',
            'never'
        ],
        'semi': [
            'error',
            'always'
        ],
        'semi-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'space-before-blocks': [
            'error',
            'always'
        ],
        'space-before-function-paren': [
            'error',
            'never'
        ],
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                'words': true,
                'nonwords': false
            }
        ],
        'spaced-comment': [
            'error',
            'always',
            {
                'line': {
                    'markers': [
                        '*package',
                        '!',
                        '/',
                        ',',
                        '='
                    ]
                },
                'block': {
                    'balanced': true,
                    'markers': [
                        '*package',
                        '!',
                        ',',
                        ':',
                        '::',
                        'flow-include'
                    ],
                    'exceptions': [
                        '*'
                    ]
                }
            }
        ],
        'symbol-description': 'error',
        'template-curly-spacing': [
            'error',
            'never'
        ],
        'template-tag-spacing': [
            'error',
            'never'
        ],
        'unicode-bom': [
            'error',
            'never'
        ],
        'wrap-iife': [
            'error',
            'inside',
            {
                'functionPrototypeMethods': true
            }
        ],
        'yield-star-spacing': [
            'error',
            'both'
        ],
        'yoda': [
            'error',
            'never'
        ],
        'no-duplicate-imports': 'error',
        'promise/param-names': 'error'
    }
};
