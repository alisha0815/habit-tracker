import React, { Component } from 'react';

class Habit extends Component {
  render() {
    return (
      <li className="habit">
        <span className="habitName">Reading</span>
        <span className="habitCounter">8</span>
        <button className="habit-btn habit-increase">
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-btn habit-decrease">
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
