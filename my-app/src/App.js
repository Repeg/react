import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Element/>
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

export default App;
