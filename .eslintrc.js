module.exports = {fd
    env: {
        browser: true,
        es2021: true,
    },
    extends: "plugin:react/recommended",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: 0,
        // overrides
        // off
        camelcase: "off",
        // warn
        "react/boolean-prop-naming": "warn",
        "react/forbid-prop-types": 0,
        "react/no-children-prop": "warn",
        "react/no-deprecated": "warn",
        // error
        semi: "error",
        "array-bracket-spacing": 0,
        "comma-dangle": 0,
        curly: 0,
        "no-var": "error",
        "no-case-declarations": "error",
        "no-console": "warn",
        "no-empty": "error",
        "sort-imports": [
            "off",
            {
                ignoreCase: true,
                ignoreMemberSort: false,
            },
        ],
        /*
      'graphql/capitalized-type-name': ['warn', {
        'schemaJson': require('./graphql/schema.json')
      }],
      'graphql/named-operations': ['error', {
        'schemaJson': require('./graphql/schema.json')
      }],
      'graphql/required-fields': ['error', {
        'requiredFields': ['id'],
        'env': 'apollo',
        'schemaJson': require('./graphql/schema.json')
      }],
      'graphql/template-strings': ['error', {
        'validators': 'all',
        'env': 'apollo',
        'schemaJson': require('./graphql/schema.json')
      }],
      */
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-closing-tag-location": "error",
        "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
        "react/jsx-handler-names": [
            "error",
            {
                eventHandlerPrefix: false,
                eventHandlerPropPrefix: "_?(on|handle|set)",
            },
        ],
        "react/jsx-max-props-per-line": [
            "error",
            {
                maximum: 1,
                when: "multiline",
            },
        ],
        "react/jsx-no-bind": [
            0,
            {
                allowArrowFunctions: false,
                allowBind: false,
                ignoreRefs: true,
            },
        ],
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-literals": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-sort-props": 0,
        "react/jsx-tag-spacing": [
            "error",
            {
                closingSlash: "never",
                beforeSelfClosing: "always",
                afterOpening: "never",
            },
        ],
        "react/jsx-wrap-multilines": "error",
        "react/no-multi-comp": [
            "error",
            {
                ignoreStateless: true,
            },
        ],
        "react/no-redundant-should-component-update": "error",
        "react/no-set-state": 0,
        "react/no-string-refs": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unused-prop-types": "error",
        "react/no-will-update-set-state": "error",
        "react/prefer-stateless-function": [
            "error",
            {
                ignorePureComponents: true,
            },
        ],
        "react/prop-types": [
            "error",
            {
                skipUndeclared: true,
            },
        ],
        "react/prefer-es6-class": ["error", "always"],
        "react/require-render-return": "error",
        "react/sort-comp": [
            "error",
            {
                order: [
                    "static-methods",
                    "lifecycle",
                    "everything-else",
                    "event-handling",
                    "rendering",
                ],
                groups: {
                    lifecycle: [
                        "displayName",
                        "propTypes",
                        "contextTypes",
                        "childContextTypes",
                        "mixins",
                        "statics",
                        "defaultProps",
                        "constructor",
                        "getDefaultProps",
                        "getInitialState",
                        "state",
                        "getChildContext",
                        "componentDidMount",
                        "componentWillReceiveProps",
                        "shouldComponentUpdate",
                        "componentWillUpdate",
                        "componentDidUpdate",
                        "componentWillUnmount",
                    ],
                    "event-handling": ["/^_?on.+$/"],
                    rendering: ["/^_?render.+$/", "render"],
                },
            },
        ],
        "react/sort-prop-types": [
            0,
            {
                callbacksLast: true,
                ignoreCase: true,
                requiredFirst: true,
            },
        ],
    },
};
