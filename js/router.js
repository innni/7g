define([
  'jquery',
  'underscore',
  'backbone',
  'views/default',
], function($, _, Backbone, DefaultView){

  'use strict';

  var AppRouter = Backbone.Router.extend({
    routes: {

      // Default
      '*actions': 'defaultAction'

    }

  });


  var initialize = function(){

    var appRouter = new AppRouter();

    appRouter.on('route:defaultAction', function(){
      var defaultView = new DefaultView();
    });


    Backbone.history.start();

  };

  return {
    initialize: initialize
  };

});