define([
	'jquery',
	'underscore'
], function ($, _) {

	'use strict';

	// Private variables
	var _whiteList = [	
			'as',
			'on'
		];

	var _capitalize = function(word){

		if ( _whiteList.indexOf(word.toLowerCase()) != -1 ) return word;
		word = word.charAt(0).toUpperCase() + word.substring(1);
		return word;
	};

	// Public API
	return {

		cleanTitle: function (title) {
			var titleWords = title.split("-");
			titleWords = _.map(titleWords, _capitalize);
			return titleWords.join(" ");
		},

		cleanDate: function(date) {
			return new Date(date).toLocaleString();	
		},

		addLoader: function(el){
			$(el).append('<div class="loader">Loader</div>');
		},

		removeLoader: function(){
			$('.loader').remove();
		},

		sortDesc: function(model, key){
			return function(model){
				return -model.get(key);
			}; 
		}
	};

});
