import React from 'react';
import App, {WIDTH_ABOVE_1024, WIDTH_BELOW_1024, THRESHOLD_WIDTH} from './App';
import {mount} from 'enzyme';


describe('The main app', () => {
    let app;
    beforeEach(() => {
        app = mount(<App/>, {attachTo: document.getElementById('root')});
    })

    it('the app should have text', () => {
        var width = window.innerWidth > THRESHOLD_WIDTH ? WIDTH_ABOVE_1024 : WIDTH_BELOW_1024;
        expect(app.text()).toBe("My width is " + width);
        app.unmount();
    })
    it ('should change text on click', () => {
        window.resizeTo(1000, 1000);
        expect(app.text()).toBe("My width is " + WIDTH_BELOW_1024);
        window.resizeTo(1025, 1000)
        expect(app.text()).toBe("My width is " + WIDTH_ABOVE_1024);
        app.unmount();
    })
})