# fix-path [![Build Status](https://travis-ci.org/sindresorhus/fix-path.svg?branch=master)](https://travis-ci.org/sindresorhus/fix-path)

> Fix the `$PATH` on OS X when run from a GUI app

Useful for Electron/NW.js apps as GUI apps on OS X doesn't inherit the `$PATH` defined in your dotfiles *(.bashrc/.bash_profile/.zshrc/etc)*.


## Install

```
$ npm install --save fix-path
```


## Usage

```js
var fixPath = require('fix-path');

console.log(process.env.PATH);
//=> '/usr/bin'

fixPath();

console.log(process.env.PATH);
//=> '/usr/local/bin:/usr/bin'
```

### Async Usage

```js
var fixPath = require('fix-path');

console.log(process.env.PATH);
//=> '/usr/bin'

fixPath.async(function(err, newPath) {
  console.log(process.env.PATH);
  //=> '/usr/local/bin:/usr/bin'
});

```

## Related

- [shell-path](https://github.com/sindresorhus/shell-path) - Get the `$PATH` from the shell


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
