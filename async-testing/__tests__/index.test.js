import React from 'react';
import App from '../index';
import {shallow} from 'enzyme';

jest.useFakeTimers()

describe('The main app', () => {
    it('the app should have text', () => {
        const app  = shallow(<App/>);
        expect(app.text()).toBe('Click here');
    })
    it('should be clickable', () => {
        const fetchUserData = jest.fn(()=>{
            return Promise.resolve()
        });
        const app = shallow(<App fetchUserData={fetchUserData} />)
        app.find('button').simulate('click');
        expect(fetchUserData.mock.calls.length).toBe(1);  
    })
    it('should change state after click', () => {
        let app;
        return new Promise((resolve, reject) => {
            const fetchUserData = jest.fn(() => {
                resolve();
                return Promise.resolve();
            })
            app = shallow(<App fetchUserData = {fetchUserData} />);
            app.find('button').simulate('click');
            expect(app.state().asyncData).toBe(null);
        }).then(() => {
            expect(app.state().asyncData).toBe('Async is here!');
            jest.runAllTimers();
            expect()
            expect(app.state().asyncData).toBe('Timeout is done!');
        });
    })
})