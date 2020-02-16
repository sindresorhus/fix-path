/**
Fix the `$PATH` on macOS when run from a GUI app.

Useful for Electron apps as GUI apps on macOS doesn't inherit the `$PATH` defined in your dotfiles *(.bashrc/.bash_profile/.zshrc/etc)*.

```
import fixPath = require('fix-path');

console.log(process.env.PATH);
//=> '/usr/bin'

fixPath();

console.log(process.env.PATH);
//=> '/usr/local/bin:/usr/bin'
```
*/
declare function fixPath(): void;

export = fixPath;
