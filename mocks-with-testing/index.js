import React, {Component} from 'react';
import {render} from 'react-dom';
import _ from 'lodash';

export default class App extends Component {
    render() {
        return <div>
        {_.map(['First line', 'Second line'], (item, key) => <div key={key}>{item}</div>)}
        </div>;
    }
}

export const lodash = _;

render(<App/>, document.body);