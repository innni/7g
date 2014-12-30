/**
 * RequireJS configuration
 */
require.config({

	// Initialize the application with the main application file
	deps: ['plugins/console', 'main'],

	paths: {
		jquery: '../components/jquery/dist/jquery.min',
		underscore: '../components/underscore/underscore-min',
		backbone: '../components/backbone/backbone',
		templates: '../templates',
		viewHelper: 'modules/viewHelper'
	},

	shim: {
		// If you need to shim anything, put it here
	},

	// Prevent caching issues, by adding an additional URL argument
	urlArgs: 'bust=' + (new Date()).getDate()

});
