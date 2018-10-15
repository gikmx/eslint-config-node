const extensions = [
    '.js',
    '.json',
    '.mjs',
];

module.exports = {

    // Use base settings
    extends: [
        '@gik',
    ],

    // Disable browser rules
    env: {
        browser: false,
        node: true,
    },

    parserOptions: {
        ecmaVersion: 2018,
    },

    settings: {
        'import/extensions': extensions,
        'import/resolver': {
            'babel-plugin-root-import': {
                extensions, // added this capbility in own fork, needed for jsx resolves
                rootPathPrefix: '~',
                rootPathSuffix: 'src',
            },
        },
    },

    // Add rules specific to backend projects.
    rules: {// 0 = off, 1 = warn, 2 = error
    },
};
