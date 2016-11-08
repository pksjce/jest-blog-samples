import React from 'react';
import App from '../index';
import {shallow} from 'enzyme';


describe('The main app', () => {
    it('the app should have text', () => {
        const app  = shallow(<App/>);
        expect(app.contains(<div>This is in react</div>)).toBe(true);
    })
})