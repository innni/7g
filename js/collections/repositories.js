define([
  'underscore',
  'backbone',
  'models/repository'
], function(_, Backbone, RepoModel){

  'use strict';

  var ProjectCollection = Backbone.Collection.extend({
    
    model: RepoModel,

    url: 'https://api.github.com/orgs/7Geese/repos',

    getRepos: function() {
    	var self = this;
    	self.trigger('FetchOn');
    	this.fetch({
    		reset: true,
    		success: function(collection, response, options){
    			self.trigger('FetchOK');
    		},

    		error: function(collection, response, options){
    			self.trigger('FetchError');
    		}
    	});
    },

  });
  return ProjectCollection;
});

