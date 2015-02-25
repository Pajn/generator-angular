'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');


var Generator = module.exports = function Generator() {
	ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createComponentFiles = function createComponentFiles() {
	this.appTemplate('component', path.join('components', this.tagName, this.tagName));
	this.testTemplate('spec/component', path.join(this.moduleName, 'components',
		this.tagName));
	this.htmlTemplate(
		'../common/component.html',
		this.moduleName + '/components/' + this.tagName + '/' + this.tagName +
		'.html'
	);
	this.htmlTemplate(
		'../common/component.scss',
		this.moduleName + '/components/' + this.tagName + '/' + this.tagName +
		'.scss'
	);
};
