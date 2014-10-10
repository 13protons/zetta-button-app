var zetta = require('zetta');
var Button = require('./devices/button');

var app = require('./apps/app.js');

zetta()
  .use(Button, 'Lights')
  .use(Button, 'Camera')
  .use(app)
  .listen(1337);
