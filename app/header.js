var React = require('react');
var $     = React.DOM;

var Header = React.createClass({
   render : function(){
       return $.div({
           id : 'header',
       }, "Dette er headeren");
   }
});

var Logo = React.createClass({
   render : function(){
       return $.img({
           id : 'logo',
       }, "Dette er headeren");
   }
});

module.exports = Header;