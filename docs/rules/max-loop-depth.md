# Enforce a maximum depth that loop block can be nested (`clean/max-loop-depth`)

<!-- end auto-generated rule header -->

Please describe the origin of the rule here.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
// "clean/max-loop-depth": ["error", 2]
for (var i = 0; i < [1, 2, 3].length; i++) {
  for (const argument of [1, 2, 3]) {
    [].forEach(item => {

    })
  } 
}

```

Examples of **correct** code for this rule:

```js
// "clean/max-loop-depth": ["error", 2]
for (var i = 0; i < [1, 2, 3].length; i++) {
  for (const argument of [1, 2, 3]) {
  }
}
```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
