import React, { Component } from 'react';
import Greeting from './greeting'

function LoginBtn (props) {
    return (
        <button onClick={props.onClick}>
            login
        </button>
    )
}

function LogoutBtn (props) {
    return (
        <button onClick={props.onClick}>
            logout
        </button>
    )
}

class loginControl extends Component {
    constructor (props) {
        super(props);
        this.state = {isloggedIn: false};
    }

    handleLoginClick = () => {
        this.setState({isloggedIn: true});
    }

    handleLogoutClick = () => {
        this.setState({isloggedIn:false});
    }

    render () {
        const isloggedIn = this.state.isloggedIn;

        let button = null;
        if (isloggedIn) {
            button = <LogoutBtn onClick={this.handleLogoutClick} />;
        }else{
            button = <LoginBtn onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isloggedIn} />
                {button}
                <div>this user is <b>{isloggedIn ? 'currently' : 'not'}</b> logged in.</div>
            </div>
        )
    }
}

export default loginControl;
