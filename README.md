# eslint-config: *gik-node*
*GIK's approach to writing for Node.js using valid EcmaScript*

These are the rules we use on all of our backend projects using NodeJS.

Checkout other configs similar to this.

- __[gik](http://github.com/gikmx/eslint-config-gik)__ the base rules that this project inherits.
- __[gik-cycle](http://github.com/gikmx/eslint-config-gik-cycle)__ for frontend CycleJS apps.

### Installation

```bash
npm i -D @gik/eslint-config-gik-node
```

After installing, make sure to have installed these peer-dependencies on your project.

*Look for the correct version for the peer-dependencies*
``` bash
npm ls --depth=0
```

*Install the corresponding versions according to output*
``` bash
npm i -D eslint@^x.y.z babel-eslint@^x.y.z eslint-plugin-import@^x.y.z
```

### Usage

In the corresponding `.eslintrc` file (or equivalent) add the `extends` property.
``` json
{
  "extends": "gik-node"
}
```
