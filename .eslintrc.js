module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
        // Make sure this is always the last configuration in the extends array.
        "plugin:prettier/recommended"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["eslint-plugin-prettier"],
    rules: {
        // "prettier/prettier": ["error"]
    },
    overrides: [
        {
            files: ["*.vue"],
            extends: [
                // Uses the recommended rules from the @typescript-eslint/eslint-plugin
                "plugin:@typescript-eslint/recommended",
                // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
                "prettier/@typescript-eslint",
                // for vue recomended
                "plugin:vue/recommended"
            ],
            globals: {},
            parser: "vue-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser"
            },
            plugins: ["eslint-plugin-vue"],
            rules: {
                // "@typescript-eslint/no-explicit-any": "off",
                // "@typescript-eslint/explicit-function-return-type": "off",
                // "@typescript-eslint/no-this-alias": "off",
                // "@typescript-eslint/explicit-function-return-type": "off",
                // "vue/html-indent": "off"
            }
        }
    ]
};