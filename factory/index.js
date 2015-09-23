'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createServiceFiles = function createServiceFiles() {
    this.appTemplate(path.join('service','factory'), path.join('service', this.name));
};
