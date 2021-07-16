# next-local-keep-files
> Local keep files for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-local-keep-files
```

## usage
```js
import '@jswork/next-local-keep-files';

nx.localKeepFiles({
  keep: 5, 
  files: globby.sync('__tests__/files/*.txt')
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-local-keep-files/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-local-keep-files
[version-url]: https://npmjs.org/package/@jswork/next-local-keep-files

[license-image]: https://img.shields.io/npm/l/@jswork/next-local-keep-files
[license-url]: https://github.com/afeiship/next-local-keep-files/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-local-keep-files
[size-url]: https://github.com/afeiship/next-local-keep-files/blob/master/dist/next-local-keep-files.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-local-keep-files
[download-url]: https://www.npmjs.com/package/@jswork/next-local-keep-files
