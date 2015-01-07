var React = require('react');
var $     = React.DOM;

var Header = React.createClass({
   render : function(){
       return $.div({
           id : 'header',
       }, [Logo(), "Plantme", AddBtn()]);
   }
});

var Logo = React.createClass({
   render : function(){
       return $.img({
           id : 'logo',
           src: 'logo.png',
           style: {width:"80px"}
       });
   }
});

var AddBtn = React.createClass({
   render : function(){
       return $.button({
           id : 'addBtn',
           style: {width:"80px"},
           onClick:this.onClick
       },"+");
   },
   onClick : function(){
       alert("ye");
   }
});

module.exports = Header;

