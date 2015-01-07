var React = require("react");
var $     = React.DOM;

var Plantlist = React.createClass({
   render : function(){
       return $.ul({
           id : 'plantlist',
       }, []);
   }
});


var PlantlistItem = React.createClass({
   render : function(){
       return $.li({

       }, [this.props.plant.name]);
   }
});

module.exports = Plantlist;