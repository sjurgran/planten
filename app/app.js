var React = require('react');
var Header = require('./header.js');
var Plantlist = require('./plantlist.js');

var $     = React.DOM;

var App = React.createClass({
   render : function(){
       return $.div({
           id : 'container',
           className : ''
       }, [Header(),Plantlist()]);
   }
});


React.renderComponent(App(),document.body);
