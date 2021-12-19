import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count > 0 ? count : 0 });
  };
  render() {
    console.log(this.props);
    const { name, count } = this.props.habit;
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
        <button className="habit-btn habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
