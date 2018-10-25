const PATH = require('path');

const extensions = [
    '.js',
    '.json',
    '.mjs',
];

module.exports = {

    root: true,

    // Use base settings
    extends: [
        '@gik',
    ],

    // Disable browser rules
    env: {
        node: true,
        es6: true,
        commonjs: false,
        browser: false,
    },

    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 9, // 2018 will be deprecated soon, use 9 instead.
        sourceType: 'module',
    },

    settings: {
        'import/extensions': extensions,
        'import/resolver': {
            alias: {
                map: [
                    ['~', PATH.resolve(process.cwd(), 'src')],
                ],
                extensions,
            },
        },
    },

    // Add rules specific to backend projects.
    rules: {// 0 = off, 1 = warn, 2 = error
    },
};
