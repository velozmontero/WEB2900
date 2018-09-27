import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';

class App extends Component {
  state = {
    from: '',
    email: '',
    subject: '',
    message: ''
  }

  onFormChange = (from, email, subject, message) => {
    this.setState({
      from: from,
      email: email,
      subject: subject,
      message: message
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/email',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="App">
        <Form 
          {...this.state}
          onFormChange={this.onFormChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default App;