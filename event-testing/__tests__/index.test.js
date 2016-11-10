import React from 'react';
import App from '../index';
import {shallow} from 'enzyme';


describe('The main app', () => {
    let app;
    beforeEach(() => {
        app  = shallow(<App/>);
    })
    it('the app should have text', () => {
        expect(app.text()).toBe("This is in react");
    })
    it ('should change text on click', () => {
        app.simulate('click');
        expect(app.text()).toBe("This has been clicked");
        app.simulate('click');
        expect(app.text()).toBe("This is in react");
    })
})