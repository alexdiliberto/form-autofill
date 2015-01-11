var distUMD = require('broccoli-dist-es6-module');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

/* Copy chance.js from bower into the src directory */
var copyChanceToSrc = new Funnel('bower_components/chance', {
  files: ['chance.js'],
  destDir: '../../src'
});

var outputTree = mergeTrees(['src', copyChanceToSrc]);

/* Author form-autofill with ES6 modules and distribute with UMD */
outputTree = distUMD(outputTree, {
  // the entry script, and module that becomes the global
  main: 'form-autofill',

  // the prefix for named-amd modules
  packageName: 'form-autofill',

  // will become window.FormAutofill with the exports from `main`
  global: 'FormAutofill',
});

module.exports = outputTree;
