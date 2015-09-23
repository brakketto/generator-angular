'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createDirectiveFiles = function createDirectiveFiles() {
    this.appTemplate('directive', path.join('shared','directive', this.name, this.name));
    this.sourceRoot(path.join(__dirname, '../templates/common'));
    this.htmlTemplate(
        'app/views/view.html',
        path.join('shared','directive', this.name, this.name.toLowerCase() + '.html'
        )
    );
    this.styleTemplate(
        'app/styles/style.less',
        path.join('shared','directive', this.name, this.name.toLowerCase() + '.less'
        )
    );


};
