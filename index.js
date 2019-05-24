module.exports = {
  extends: [
    "eslint-config-airbnb",
  ].map(require.resolve),

  plugins: [
    "prefer-arrow",
    "no-loops"
  ],

  parser: "babel-eslint",

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
  },

  rules: {
    // Use prop-types on any component that receives props
    "react/prop-types": "error",

    // Omit constructor in classes if not being used
    // Prefer export statement after component declaration
    "import/exports-last": "error",

    // Prefer functional stateless components if possible
    "react/prefer-stateless-function": ["error", { ignorePureComponents: true }],

    // Use classnames for dynamically applying classes
    // TODO - Can't find any way to enforce this one, might have to write our own

    // Require strict === and !== except when comparing to null
    "eqeqeq": ["error", "always", {"null": "ignore"}],

    // Prefer arrow functions over the function keyword except when defining classes or methods
    "prefer-arrow/prefer-arrow-functions": [
      "warn",
      {
        "disallowPrototype": true,
        "singleReturnOnly": false,
        "classPropertiesAllowed": true
      }
    ],

    // lowerCamelCase for variables and functions / SCREAMING_SNAKE_CASE for constants
    "camelcase": ["error", {"properties": "always"}],

    // Prefer template strings over string concatenation
    "prefer-template": "error",

    // Prefer array functions like map and forEach over loops
    "no-loops/no-loops": "warn",

    // Use const for declaring variables that will never be re-assigned, and let otherwise
    "prefer-const": "error",

    // Avoid var to declare variables
    "no-var": "error",

    // Use a trailing comma after each item in a multi-line array or
    // object literal, including the last item
    "comma-dangle": ["error", "always-multiline"],

    // Do not include parentheses around a sole arrow function parameter
    "arrow-parens": ["error", "as-needed"],

    // Print spaces between brackets in object literals
    "object-curly-spacing": ["error", "always"],

    // The maximum characters per line of code should be 80
    "max-len": ["error", {
      "code": 80,
      "tabWidth": 2,
      "ignoreUrls": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
    }],

    // Do not use semicolons at the end of statements
    "semi": ["error", "never", { "beforeStatementContinuationChars": "never"}],

    // Prefer double quotes to single quotes (but backticks are okay)
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],

    // Allow usage of variables before they're defined
    // (useful for declaring styles underneath JSX)
    "no-use-before-define": "off",

    // Allow JSX to exist in files that don't have the .jsx extension
    "react/jsx-filename-extension": "off",
  },
}
