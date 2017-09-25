# eslint-config
GIK's approach to EcmaScript

### Packages included
If you install this package, it will automatically include:

- `gik`: The common rules for both frontend and backend development.
- `gik-node`: Rules for backend development.
- `gik-cycle`: Rules for frontend development using CycleJS.


### Installation

```bash
npm i -D @gik/eslint-config
```

After installing, make sure to have installed these peer-dependencies on your project.
*Look for the correct version on the installation output*

``` bash
npm i -D eslint babel-eslint eslint-plugin-import
```

### Usage

In the corresponding `.eslintrc` file (or equivalent) add the `extends` property pointing
to the preset name you wish to use.


For general use:
``` json
{
  "extends": "gik"
}
```

For cycle.js apps:
``` json
{
  "extends": "gik-cycle"
}
```

For node:
``` json
{
  "extends": "gik-node"
}
```
