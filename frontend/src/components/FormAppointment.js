import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class FormAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      username: '',
      age: null,
    };
  }
  handleChange = (event) => {
    const target = event.target;
    let nam = target.name;
    let val = target.value;
    if (nam === "age") {
      if (!Number(val)) {
        alert("Your age must be a number");
      }
    }
    this.setState({[nam]: val});
  }


  render() {
    return (
      <form>
      <h4>Make an appointment</h4>
      <p>Pick up a date</p>
      <input
        type='date'
        name='date'
        onChange={this.handleChange}
        locale="en-GB" // weeks start on Monday
      />
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.handleChange}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.handleChange}
      />
      </form>
    );
  }
}