// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    // Major libraries
    jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min',
    underscore: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.9.2/lodash.min', // https://github.com/amdjs
    backbone: 'libs/backbone/backbone-min', // https://github.com/amdjs
    mustache: 'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.0/mustache.min',
    // Require.js plugins
    text: 'libs/require/text',

    // Just a short cut so we can put our html outside the js dir
    // When you have HTML/CSS designers this aids in keeping them out of the js directory
    templates: '../templates',
  }

});

// Let's kick off the application

require([
  'views/app',
  'vm',
  'router'
], function(AppView, Vm, Router){

  var appView = Vm.create({}, 'AppView', AppView);
  
  Router.initialize({appView: appView});
  appView.render(); // render() calls Backbone.history when its ready to start

});
