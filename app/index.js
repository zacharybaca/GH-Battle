var React = require('react');
var ReactDom = require('react-dom');
var PropTypes = require('prop-types');
var App = require('./components/App');
require('../app/index.css');



ReactDOM.render(
    <App />,
    document.getElementById("app")
);