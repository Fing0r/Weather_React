module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "react-app",
        "react-app/jest",
        "airbnb",
        "airbnb-typescript",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "eslint-config-prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: "./",
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
        indent: "off",
        "react/react-in-jsx-scope": ["off"],
        "react/jsx-uses-react": ["off"],
        "react/jsx-props-no-spreading": ["warn"],
        "react/no-unescaped-entities": ["off"],
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": ["error"],
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "import/no-unresolved": 0,
        "jsx-a11y/label-has-associated-control": [2, { labelAttributes: ["inputLabel"] }],
        "@typescript-eslint/no-non-null-assertion": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
                mjs: "never",
                "": "never",
            },
        ],
    },
};
