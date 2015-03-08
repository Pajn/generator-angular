'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createAnimationFiles = function createAnimationFiles() {
  this.appTemplate('animation', path.join(this.moduleName || 'scripts', 'animations', this.name));
};
