var fs = require('fs-extra');

fs.removeSync('.build');
fs.mkdirsSync('.build');
fs.copySync('src/', '.build/');