var React = require('react');
var ListItem = React.createClass({

render : function(){

  return (
<li>
  <h1>
{this.props.ingredient}
  </h1>

  </li>
);
}
});


module.exports = ListItem;
