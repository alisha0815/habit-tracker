// import React, { Component } from 'react';
import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;

// export default class HabitAddForm extends Component {
//   formRef = React.createRef();
//   inputRef = React.createRef();
//   onSubmit = (e) => {
//     e.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     // to initialize the input value
//     // this.inputRef.current.value = '';
//     this.formRef.current.reset();
//   };
//   render() {
//     return (
//       <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//         <input
//           ref={this.inputRef}
//           type="text"
//           className="add-input"
//           placeholder="Habit"
//         />
//         <button className="add-button">Add</button>
//       </form>
//     );
//   }
