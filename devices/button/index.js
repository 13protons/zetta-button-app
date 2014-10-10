var Device = require('zetta').Device;
var util = require('util');

var Button = module.exports = function(n) {
  Device.call(this);
  this.name = n || 'Button';
};
util.inherits(Button, Device);

Button.prototype.init = function(config) {
  config
    .state('ready')
    .type('button')
    .when('ready', { allow: ['click'] })
    .map('click', this.Click);
};

Button.prototype.Click = function(cb) {
  cb();
};
