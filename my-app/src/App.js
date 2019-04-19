import React, { Component } from 'react';
import LoginControl from './login';
import NumberList from './list';
import NameForm from './nameForm';
import './App.css';

const numbers = [1]
class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginControl />
        <Clock name='clock1' />
        <NumberList numbers={numbers} />
        <NameForm />
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
  // constructor(props){
  //   super(props)
  // }

  handleClick = () => {
    console.log('you are clicking user--->' + this.props.name)
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
        {this.state.date.toLocaleTimeString().substr(this.state.date.toLocaleTimeString().length - 1,this.state.date.toLocaleTimeString().length)%5 === 0 &&
          <h2>it is every 5s</h2>
        }
      </div>
    );
  }
}

export default App;
