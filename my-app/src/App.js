import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock name='clock1' />
        <Clock name='clock2' />
        <Clock name='clock3' />
        <Clock name='clock4'/>
      </div>
    );
  }
}

function formatUser(user) {
  return user.firstName + ' ' + user.lastName
}

const user =
  {
    firstName: 'Jon1',
    lastName: 'Doe1'
  }

class User extends Component{
  constructor(props){
    super(props)
  }

  handleClick = () => {
    console.log('you are clicking user' + this.props.name)
  }
  render() {
    return (
      <h1 onClick={this.handleClick}>
        hello, {formatUser(user)}!
      </h1>
    )
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: '',
    };
  }

  handleClick = () => {
    console.log('you are clicking Clock' + this.props.name)
  }

  componentDidMount () {
    this.timerID  = setInterval(()=>{
      this.tick()
    },1000)
  }

  componentWillMount () {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    });
    this.setState({
      name: 'userAt:' + this.state.date
    })
  }

  render () {
    return (
      <div>
        <User name={this.state.name}/>
        <h2 onClick={this.handleClick}>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
