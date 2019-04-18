import React, { Component } from 'react';

class NumberList extends Component {
    constructor(props){
        super(props);
        this.state = {
            listItems: []
        };
    };

    componentDidMount () {
        this.setState({
            listItems: this.props.numbers.map((number)=>
                <li key={number.toString()}>
                    {number}
                </li>
            )
        });
    }

    render () {
        return (
            <ul>{this.state.listItems}</ul>
        );
    }
}

export default NumberList;