import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

function formatUser(user) {
  return user.firstName + ' ' + user.lastName
}

const user = {
  firstName: 'Jon',
  lastName: 'Doe'
}

class Element extends Component{
  render() {
    return (
      <h1>
        hello, {formatUser(user)}!
      </h1>
    )
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render () {
    return (
      <div>
        <Element/>
        <h2>It is {this.props.date.toLocalTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
