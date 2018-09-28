module.exports = {

    // Use base settings
    extends: '@gik',

    // Disable browser rules
    env: {
        browser: false,
        node: true,
    },

    parserOptions: {
        ecmaVersion: 2018,
    },

    'import/resolver': {
        'babel-plugin-root-import': {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
        }
    }

    // Add rules specific to backend projects.
    rules: {// 0 = off, 1 = warn, 2 = error
    },
};
