var React = require('react');
var Header = require('./header.js');
var $     = React.DOM;

var App = React.createClass({
   render : function(){
       return $.div({
           id : 'container',
           className : ''
       }, [Header()]);
   }
});


React.renderComponent(App(),document.body);
