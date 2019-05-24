# eslint-config-vaporware

## Installation

Within a project's root directory, run:

```
npm install --save-dev eslint github:vaporware/eslint-config-vaporware
```

This installs `eslint` and `eslint-config-vaporware`, along with all the plugins it depends on.

Now, create a file in the project's root called `.eslintrc`. It's a JSON file which should look like this:

```json
{
  "extends": "eslint-config-vaporware"
}
```

You can override individual rules per-project using this file. Here's an example that overrides some rules:

```json
{
  "extends": "eslint-config-vaporware",
  "rules": {
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "no-console": "off"
  }
}
```

Turning off `import/no-unresolved` and `import/no-extraneous-dependencies` is important for Expo projects because it uses a kind of strange build process that eslint can't deal with.

## VS Code <-> eslint integration

Install the plugin `dbaeumer.vscode-eslint` for eslint integration. Sometimes this won't start working until you've closed and re-opened your project window.

## VS Code <-> (prettier + eslint) integration

Install `esbenp.prettier-vscode` (in addition to the eslint plugin above) for Prettier integration.

Add a `prettier` key to your package.json and paste your Prettier config in there. For example:

```js
/* "dependencies": { ... }, */
"prettier": {
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "printWidth": 80,
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false
}
```

Also add `.vscode/settings.json` to the root of your project, and paste these values into it:

```json
{
  "editor.formatOnSave": true,
  "prettier.eslintIntegration": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/node_modules": true
  }
}
```

This sets up auto-formatting on save, prettier <-> eslint integration, specifies Prettier as the default code formatter, and excludes unnecessary folders from VS Code's file watcher.

## VS Code per-project extension recommendations
To have VS Code suggest plugins when a new user opens your project, you can add a `.vscode/extensions.json` file. Here's an example which will suggest the above plugins:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}
```
