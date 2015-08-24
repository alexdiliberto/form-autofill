var distUMD    = require('broccoli-dist-es6-module');
var Funnel     = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var log        = require('broccoli-stew').log;

// Input tree with chance.js file from bower
var chanceJsFile = new Funnel('bower_components', {
  srcDir:  'chance',
  files:   ['chance.js']
});

var outputTree = mergeTrees(['src', chanceJsFile]);

// Author form-autofill with ES6 modules and distribute with UMD
outputTree = distUMD(outputTree, {
  // the entry script, and module that becomes the global
  main: 'form-autofill',

  // the prefix for named-amd modules
  packageName: 'form-autofill',

  // will become window.FormAutofill with the exports from `main`
  global: 'FormAutofill',
});

module.exports = outputTree;
