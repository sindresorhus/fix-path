# fix-path [![Build Status](https://travis-ci.org/sindresorhus/fix-path.svg?branch=master)](https://travis-ci.org/sindresorhus/fix-path)

> Fix the `$PATH` on macOS when run from a GUI app

Useful for Electron apps as GUI apps on macOS doesn't inherit the `$PATH` defined in your dotfiles *(.bashrc/.bash_profile/.zshrc/etc)*.

## Install

```
$ npm install fix-path
```

## Usage

```js
const fixPath = require('fix-path');

console.log(process.env.PATH);
//=> '/usr/bin'

fixPath();

console.log(process.env.PATH);
//=> '/usr/local/bin:/usr/bin'
```

## Related

- [shell-path](https://github.com/sindresorhus/shell-path) - Get the `$PATH` from the shell
