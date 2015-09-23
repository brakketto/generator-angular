'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);

  // if the controller name is suffixed with ctrl, remove the suffix
  // if the controller name is just "ctrl," don't append/remove "ctrl"
    this.statePath = path.join(this.name.split('.').join('/'));
    this.stateName = this.name;
    this.name = this.name.split('.');
    this.name = this.name[this.name.length-1];
  if (this.name && this.name.toLowerCase() !== 'ctrl' && this.name.substr(-4).toLowerCase() === 'ctrl') {
    this.name = this.name.slice(0, -4);
  }
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createControllerFiles = function createControllerFiles() {
    console.log(this.name);
    this.appTemplate('controller', path.join('states',this.statePath  ,this.name));
    this.sourceRoot(path.join(__dirname, '../templates/common'));
    this.htmlTemplate(
        'app/views/view.html',
        path.join('states', this.statePath, this.name.toLowerCase() + '.html'
        )
    );
    this.styleTemplate(
        'app/styles/style.less',
        path.join('states', this.statePath, this.name.toLowerCase() + '.less'
        )
    );
};
