import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  handleIncrement = () => {
    console.log('handleincrement', this.props.habit);
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    // const { name } = this.props.habit;
    const { name } = this.props;
    const { count } = this.props;
    // console.log(this.props);
    return (
      <li className="habit">
        <span className="habitName">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-btn habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-btn habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-btn habit-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
