# eslint-plugin-clean

clean

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-clean`:

```sh
npm install eslint-plugin-clean --save-dev
```

## Usage

Add `clean` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "clean"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
      "clean/max-if-depth": ["error", 3],
      "clean/max-loop-depth": ["error", 2]
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                           | Description                                           |
| :--------------------------------------------- | :---------------------------------------------------- |
| [max-if-depth](docs/rules/max-if-depth.md)     | Enforce a maximum depth that if blocks can be nested  |
| [max-loop-depth](docs/rules/max-loop-depth.md) | Enforce a maximum depth that loop block can be nested |

<!-- end auto-generated rules list -->
