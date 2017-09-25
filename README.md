# eslint-config: *@gik/node*
*GIK's approach to writing for Node.js using valid EcmaScript*

These are the rules we use on all of our backend projects using NodeJS.

Checkout other configs similar to this.

- __[@gik](http://github.com/gikmx/eslint-config)__ the base rules that this project inherits.
- __[@gik/cycle](http://github.com/gikmx/eslint-config-cycle)__ for frontend CycleJS apps.

### Installation

```bash
npm i -D eslint @gik/eslint-config-node
```

### Usage

In the corresponding `.eslintrc` file (or equivalent) add the `extends` property.
``` json
{
  "extends": "@gik/node"
}
```
