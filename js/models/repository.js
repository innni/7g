define([
  'underscore',
  'backbone'
], function(_, Backbone){
  
  'use strict';

  var RepoModel = Backbone.Model.extend({
    defaults: {	
      name: 'unknown',
      forks: 0,
      language: 'unknown',
      created_at: 'unknown'
    }
  });
  return RepoModel;
});