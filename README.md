# eslint-config
GIK's approach to EcmaScript

### Packages included
If you install this package, it will automatically include:

- `gik-base`: The common rules for both frontend and backend development.
- `gik-back`: Rules for backend development.
- `gik-front`: Rules for frontend development. (SPA)

You can also install each package separatedly.

### Installation

You can either ins

```bash
# All packages
npm i -D @gik/eslint-config
# gik-base
npm i -D eslint-config-gik-base
# gik-back
npm i -D eslint-config-gik-back
# gik-front
npm i -D eslint-config-gik-front
```

After installing either package, pleaske make sure to have installed these
peer-dependencies on your project.
*Look for the correct version on the installation output*

``` bash
npm i -D eslint babel-eslint eslint-plugin-import
```

