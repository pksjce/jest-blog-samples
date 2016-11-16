import React, {Component} from 'react';
import {render} from 'react-dom';

export const DEFAULT_TEXT = "This is in react";
export const CLICKED_TEXT = "This has been clicked";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return <div onClick={this.handleClick}>{this.state.clicked ? CLICKED_TEXT : DEFAULT_TEXT}</div>;
    }
    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        })
    }
}

render(<App/>, document.body)