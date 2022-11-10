

module.exports = {
    env: {
      node: true,
      browser: true,
      es2021: true,
    },
    extends: [
      "plugin:jsx-a11y/recommended",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "prettier",
    ],
    ignorePatterns: [".eslintrc.js", "vite.config.ts"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    settings: {
      react: {
        version: "detect",
      },
      "jsx-a11y": {
        components: {
          Box: "div",
          Button: "button",
          TextField: "input",
          Select: "select",
          Chip: "div",
          Card: "div",
          Link: "a",
          Container: "div",
          Grid: "div",
        },
      },
    },
    plugins: ["simple-import-sort", "jsx-a11y", "@typescript-eslint", "prettier"],
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "spaced-comment": "error",
      "simple-import-sort/imports": "warn",
      "@typescript-eslint/no-var-requires": 0,
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  }