module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    React: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react-hooks/recommended",
    'plugin:jest/recommended',
    'next/core-web-vitals',
    'next',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
  plugins: ['@typescript-eslint', 'jest', "react-refresh"],
  rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/no-namespace": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-this-alias": "off",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"prefer-spread": "off",
		"no-case-declarations": "off",
		"no-console": "off",
		"@typescript-eslint/no-unused-vars": ["warn"],
		"@typescript-eslint/consistent-type-imports": "warn",
		"@typescript-eslint/no-unnecessary-condition": "warn",
    "react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
  },
};
