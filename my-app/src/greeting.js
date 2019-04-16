import React, { Component } from 'react';

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

class GuestGreeting extends Component {
  render(){
    return (
      <h1>please signIn!</h1>
    )
  }
}

function Greeting (props) {
  const isLoggedIn = props.isLoggedIn
  if(isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Greeting;
