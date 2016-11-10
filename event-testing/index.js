import React, {Component} from 'react';
import {render} from 'react-dom';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return <div onClick={this.handleClick}>{this.state.clicked ? "This has been clicked" : "This is in react"}</div>;
    }
    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        })
    }
}

render(<App/>, document.body)