define([
  'jquery',
  'underscore',
  'backbone',
  'collections/repositories',
  'viewHelper',
  'text!templates/repos.html',
  'text!templates/error.html'
], function($, _, Backbone, RepoCollection, viewHelper, defaultTemplate, errorTemplate){

    'use strict';

    var HomeView = Backbone.View.extend({
    
    el: $("main"),

    initialize: function(){
      this.collection = new RepoCollection();
      this.listenTo(this.collection, 'FetchOn', this.showProgress);
      this.listenTo(this.collection, 'FetchOK', this.handleSuccess);
      this.listenTo(this.collection, 'FetchError', this.handleError);
      this.collection.getRepos();
    },

    showProgress: function(){
      viewHelper.addLoader(this.el);
    },

    handleSuccess: function(){
      viewHelper.removeLoader();
      this.render();
    },

    handleError: function(){
      this.renderError();
    },
    
    render: function(){ 
      var compiledTemplate = _.template(defaultTemplate);
      var sortedCollection = {};
      sortedCollection.models = this.collection.sortBy(viewHelper.sortDesc(this.model, 'forks'));
      _.extend(sortedCollection, viewHelper);   
      this.$el.append( compiledTemplate({ repos: sortedCollection  }) );
    },

    renderError: function(){
      var compiledTemplate = _.template( errorTemplate );
      this.$el.append( compiledTemplate({}) );
    }

  });
 
  return HomeView;

});