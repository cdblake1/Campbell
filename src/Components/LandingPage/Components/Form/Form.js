import React, { Component } from 'react';
import Input from './Components/Input';
import './form.css';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <div className="form-header">
          <p>Get a Free Consultation</p>
        </div>
        <div className="form-body">
          <Input label="Name" type="text" />
          <Input label="Phone" type="text" />
          <Input label="Email" type="email" />
        </div>
      </div>

    );
  }
}

export default Form;
