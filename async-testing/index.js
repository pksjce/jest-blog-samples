import React, {Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery'
const root = 'https://jsonplaceholder.typicode.com';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            asyncData: null
        };
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return <div>
            <button onClick={this.handleClick}>Click here</button>
            <div>{this.state.asyncData}</div>
        </div>;
    }
    handleClick() {
        this.props.fetchUserData().then(() => {
            this.setState({
                asyncData: "Async is here!"
            })
            setTimeout(() => {
                this.setState({
                    asyncData: "Timeout is done!"
                })
            },100)
        });
    }
}

render(<App fetchUserData={fetchUserData}/>, document.body);

function fetchUserData() {
        return $.ajax({
            url: root + '/posts/1',
            method: 'GET'
        })
    }