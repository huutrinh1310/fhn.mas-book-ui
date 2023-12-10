module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["react-app", "react-app/jest", "plugin:storybook/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    '@typescript-eslint/ban-types': 'off',
    "react-hooks/rules-of-hooks": "warn",
  },
  extends: ["react-app", "react-app/jest"],
};
