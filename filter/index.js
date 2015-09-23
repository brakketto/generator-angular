'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createFilterFiles = function createFilterFiles() {
    this.appTemplate('filter', path.join('shared','filter', this.name));
};
