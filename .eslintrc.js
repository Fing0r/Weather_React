module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'no-console': 0,
        'jsx-a11y/no-autofocus': 0,
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'linebreak-style': 0,
        'react/jsx-props-no-spreading': 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'comma-dangle': 0,
        'object-curly-newline': 0,
        'operator-linebreak': 0,
        "react-hooks/rules-of-hooks": "error", // Проверяем правила хуков
        "react-hooks/exhaustive-deps": "warn" // Проверяем зависимости эффекта
    },
};
