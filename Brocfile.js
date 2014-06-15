var dist = require('broccoli-dist-es6-module');
var moveFile = require('broccoli-file-mover');
var outputTree;

outputTree = dist('src', {
  // the entry script, and module that becomes the global
  main: 'form-autofill',

  // the prefix for named-amd modules
  packageName: 'form-autofill',

  // will become window.FormAutofill with the exports from `main`
  global: 'FormAutofill',
});

outputTree = moveFile(outputTree, {
  srcFile: '../../vendor/chance/chance.js',
  destFile: '../../src/chance.js',
  copy: true
});

module.exports = outputTree;
