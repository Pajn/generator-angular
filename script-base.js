'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var angularUtils = require('./util.js');
var chalk = require('chalk');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.moduleName = arguments[0][1] || '';

  var bowerJson = {};

  try {
    bowerJson = require(path.join(process.cwd(), 'bower.json'));
  } catch (e) {}

  if (bowerJson.name) {
    this.appname = bowerJson.name;
  } else {
    this.appname = path.basename(process.cwd());
  }

  this.appname = this._.slugify(this._.humanize(this.appname));

  this.scriptAppName = bowerJson.moduleName || this._.camelize(this.appname) +
    angularUtils.appName(this);

  this.cameledName = this._.camelize(this.name);
  this.classedName = this._.classify(this.name);
  this.tagName = this._.dasherize(this.name);

  if (typeof this.env.options.appPath === 'undefined') {
    this.env.options.appPath = this.options.appPath || bowerJson.appPath ||
      'app';
    this.options.appPath = this.env.options.appPath;
  }

  this.env.options.testPath = this.env.options.testPath || bowerJson.testPath ||
    'test/spec';

  var sourceRoot = '/templates/javascript';
  this.scriptSuffix = '.js';

  this.sourceRoot(path.join(__dirname, sourceRoot));
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.appTemplate = function(src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src + this.scriptSuffix,
    path.join(this.env.options.appPath, dest.toLowerCase()) + this.scriptSuffix
  ]);
};

Generator.prototype.testTemplate = function(src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src + this.scriptSuffix,
    path.join(this.env.options.testPath, dest.toLowerCase()) + this.scriptSuffix
  ]);
};

Generator.prototype.htmlTemplate = function(src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src,
    path.join(this.env.options.appPath, dest.toLowerCase())
  ]);
};

Generator.prototype.generateSourceAndTest = function(appTemplate, testTemplate,
  targetDirectory) {
  // Services use classified names
  if (this.generatorName.toLowerCase() === 'service') {
    this.cameledName = this.classedName;
  }

  this.appTemplate(appTemplate, path.join(this.moduleName || 'scripts', targetDirectory, this.name));
  this.testTemplate(testTemplate, path.join(this.moduleName, targetDirectory, this.name));
};
