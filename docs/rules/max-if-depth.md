# Enforce a maximum depth that if blocks can be nested (`clean/max-if-depth`)

<!-- end auto-generated rule header -->

Please describe the origin of the rule here.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
// "clean/max-if-depth": ["error", 2],
if (['js', 'ts', 'jsx', 'tsx'].includes('ts')) {
  if (['button.component', 'button.test'].includes('component')) {
    if (statement) {
      
    }
  }
}
```

Examples of **correct** code for this rule:

```js
// "clean/max-if-depth": ["error", 2],
if (['js', 'ts', 'jsx', 'tsx'].includes('ts')) {
  if (['button.component', 'button.test'].includes('component')) {
    
  }
}
```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
