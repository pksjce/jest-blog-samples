import React from 'react';
import App, {DEFAULT_TEXT, CLICKED_TEXT} from '../index';
import {shallow} from 'enzyme';


describe('The main app', () => {
    let app;
    beforeEach(() => {
        app  = shallow(<App/>);
    })

    it('the app should have text', () => {
        expect(app.text()).toBe(DEFAULT_TEXT);
    })
    it ('should change text on click', () => {
        app.simulate('click');
        expect(app.text()).toBe(CLICKED_TEXT);
        app.simulate('click');
        expect(app.text()).toBe(DEFAULT_TEXT);
    })
})