import React, { Component } from 'react';
import Bot from '../../components/Chat/Chat';

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact Information</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <Bot/>
      </div>
    );
  }
}

export default Contact;
