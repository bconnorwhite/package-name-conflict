<div align="center">
  <h1>package-name-conflict</h1>
  <a href="https://npmjs.com/package/package-name-conflict">
    <img alt="npm" src="https://img.shields.io/npm/v/package-name-conflict.svg">
  </a>
  <a href="https://github.com/bconnorwhite/package-name-conflict">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/package-name-conflict.svg">
  </a>
  <a href="https://github.com/bconnorwhite/package-name-conflict">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/npm-pd?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Check if NPM package names conflict.

To prevent [typosquatting](https://blog.npmjs.org/post/163723642530/crossenv-malware-on-the-npm-registry), NPM no longer allows names that [differ from existing packages in punctuation only](https://blog.npmjs.org/post/168978377570/new-package-moniker-rules).

This package checks if package names conflict.  

_Note:_  
_Package names are not validated. To validate package names, use [validate-package-name](https://www.npmjs.com/package/validate-npm-package-name)._

## Installation

```bash
yarn add package-name-conflict
```

```bash
npm install package-name-conflict
```
## API

```ts
import { conflicts, conflictsAny transform } from "package-name-conflict";

// Check if two package names conflict:

conflicts("abc.123", "Abc-123"); // true

// Return first conflicting package name in an array:

conflictsAny("abc123", ["test", "test2", "Abc-123"]); // "Abc-123"

conflictsAny("abc123", ["test", "test2"]); // false

// Transform a package name to its simplified form:

transform("Abc-123"); // "abc123"
```
#### Types:
```ts
conflicts(nameA: string, nameB: string) => boolean;

conflictsAny(name: string, names: string[]) => string | false;

transform(name: string) => string;
```

##

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/package-name-conflict.svg"></h2>

- [@bconnorwhite/bob](https://npmjs.com/package/@bconnorwhite/bob): Bob builds and watches typescript projects.
- [jest](https://npmjs.com/package/jest): Delightful JavaScript Testing.

##

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/package-name-conflict.svg"></h2>

[MIT](https://mit-license.org/)

##

<br />

## Related Packages

- [all-package-names](https://npmjs.com/package/all-package-names): Get all NPM package names.

