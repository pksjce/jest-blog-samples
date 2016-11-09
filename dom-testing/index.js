import React, {Component} from 'react';
import {render} from 'react-dom';

export default class App extends Component {
    render() {
        return <div>This is in react</div>;
    }
}

render(<App/>, document.getElementById('root'));