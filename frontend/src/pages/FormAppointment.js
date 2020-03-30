import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import defaultBcg from '../images/service-1.jpg';


export default class FormAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      service: '',
      time: '',
      username: '',
      phone: null,
      email: '',
      remark: ''
    };
  }
  handleChange = event =>{
    // if (name === "phone") {
    //   if (!Number(value)) {
    //     alert("Phone must be a number");
    //   }
    // }
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    let form = event.target;
    let data = {date: form[0].value, service: form[1].value, time: form[2].value, 
      username: form[3].value, phone: form[4].value, email: form[5].value , remark: form[6].value};
    console.log(JSON.stringify(data));
    fetch('/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then((myResponse) => myResponse.json())
    .then((myData) => {
      if (myData.success){
        console.log('Hi');
        this.props.history.push('/');
      };
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    event.preventDefault();
  }

  render() {
    return (
      <>
      <StyledHero img={defaultBcg}>            
      <Banner title="book now">
          <Link to='/' className="btn-primary">
              return home
          </Link>
          </Banner>
      </StyledHero>

      <form className="booking-form" onSubmit={this.handleSubmit} >
      <h5 className="form-title">Make an appointment</h5>
      <p>Date</p>      
      <DatePicker
      dateFormat="MMMM d, yyyy"
        selected={this.state.date}
        onChange={date => this.setState({date: date})}
      />
      <p>Service</p>
      <select val={this.state.service} onChange={this.handleChange}>
      <option val="manicure">Manicure</option>
      <option val="manicure+nail polish">Manicure + Nail Polish</option>
      <option val="manicure+gel polish">Manicure + Gel Polish</option>
      <option val="pedicure">Pedicure</option>
      <option val="pedicure+nail polish">Pedicure + Nail Polish</option>
      <option val="pedicure+gel polish">Pedicure + Gel Polish</option>
      <option val="men haircut">Men Haircut</option>
      <option val="boys haircut">Boys Haircut</option>
      </select>
      <p>Time</p>
      <DatePicker
        selected={this.state.time}
        onChange={date => this.setState({time: date})}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={45}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      <p>Name</p>
      <input
        type='text'
        name='username'
        onChange={this.handleChange}
      />
      <p>Phone</p>
      <input
        type='text'
        name='phone'
        onChange={this.handleChange}
      />
      <p>Email</p>
      <input
        type='text'
        name='email'
        onChange={this.handleChange}
      />      
      <p>Remark</p>
      <input
        type='text'
        name='remark'
        onChange={this.handleChange}
      />
      <input id="btn-submit" type="submit" value="Submit" />
      </form>
    </>
    );
  }
}