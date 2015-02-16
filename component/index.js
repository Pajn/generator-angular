'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createComponentFiles = function createComponentFiles() {
  this.generateSourceAndTest(
    'component',
    'spec/directive',
    'directives',
    this.options['skip-add'] || false
  );
  this.htmlTemplate(
    '../common/partial.html',
    'partials/' + this.name + '.html'
  );
};
