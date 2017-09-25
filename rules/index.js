module.exports = {

    // Use base settings
    extends: '../../eslint-config-gik/rules/index.js',

    // Disable browser rules
    env: {
        browser: false,
        node: true,
    },

    // Add rules specific to backend projects.
    rules: {// 0 = off, 1 = warn, 2 = error
    },
};
