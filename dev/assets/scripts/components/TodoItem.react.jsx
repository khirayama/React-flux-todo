var React = require('react');
var ReactPropTypes = React.PropTypes;
var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput.react');

var cx = require('react/lib/cx');

var TodoItem = React.createClass({
  propTypes: {
   todo: ReactPropTypes.object.isRequired
  },
  render: function() {
    var todo = this.props.todo;
    return (
      <li className={cx({
          'completed': todo.complete,
        })}
        key={todo.id}>
        <div className="view">
          <div className="toggle" onClick={this._onToggleComplete}></div>
          <label>{todo.text}</label>
          <div className="destroy" onClick={this._onDestroyClick}></div>
        </div>
      </li>
    );
  },
  _onToggleComplete: function() {
    TodoActions.toggleComplete(this.props.todo);
  },
  _onDestroyClick: function() {
    TodoActions.destroy(this.props.todo.id);
  }
});
module.exports = TodoItem;
