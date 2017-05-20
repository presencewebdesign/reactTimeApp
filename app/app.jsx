var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Nav = require('Nav');

// Load Foundation 
require('style!css!foundation-sites/dist/css/foundation.min.css')

$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Router history={hashHistory}>
		<Router path="/" component={Main}>
		</Router>
	</Router>,
    document.getElementById('app')
);