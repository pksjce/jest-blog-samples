import React, {Component} from 'react';

export const WIDTH_ABOVE_1024 = 350;
export const WIDTH_BELOW_1024 = 300;
export const THRESHOLD_WIDTH = 1024;

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth > THRESHOLD_WIDTH ? WIDTH_ABOVE_1024: WIDTH_BELOW_1024
        }
        this.handleResize = this.handleResize.bind(this);
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }
    render() {
        return <div style={{width:this.state.width}}>My width is {this.state.width}</div>;
    }
    handleResize() {
        this.setState({
            width: window.innerWidth > THRESHOLD_WIDTH ? WIDTH_ABOVE_1024 : WIDTH_BELOW_1024
        })
    }
}