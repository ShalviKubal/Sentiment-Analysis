var angular = require('angular');

var hello = require('./app/hello');

var homeModule = require('./app/homeComponent/index.js');

require('angular-ui-router');
var routesConfig = require('./routes');

require('./index.scss');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router', homeModule])
  .config(routesConfig)
  .component('app', hello);
