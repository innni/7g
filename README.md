## View Project

Get a server running:

	$ cd 7g
	$ python -m SimpleHTTPServer

Access http://0.0.0.0:8000/dist

If you want to modify code, set up the dev environment first.

## Dev Env Dependencies

You will need to install some stuff, if you haven't already:

* Node.js
* Ruby
* Node: npm
* Ruby: Sass 3.3.x

## Dev Env Setup

Install Grunt command line tools and bower:

	$ npm install -g grunt-cli bower

Inside the project's directory, install project components:

	$ npm install

## To run tests:
	
	$ grunt test

This project needs more extensive tests.

## Notes:
1. This project uses Use Init for a hassle-free work-flow: http://use-init.com/ (does not include a backbone boilerplate though)
2. CSS based progress loader used is from: http://projects.lukehaas.me/css-loaders/