import React from 'react';
import {shallow} from 'enzyme';
import App from '../index';
import {lodash} from '../index';

describe('The main app', () => {
    it('the app should have text', () => {
        const app  = shallow(<App/>);
        expect(app.childAt(1).contains(<div>First line</div>)).toBe(true);
    })
    it('lodash should have map function', () => {
        expect(typeof lodash.map).toBe('function')
    })
})