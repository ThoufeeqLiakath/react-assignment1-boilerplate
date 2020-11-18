import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from '../Components/header/Header';

// please add your test cases here

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})
it('h6 is available',() => {
    act(() => {
        render(<Header />,container);
        const title = container.querySelector('h6');
        expect(title).toBeInTheDocument()
    })
})
it('h6 has MuiTypography-h6',() => {
    act(() => {
        render(<Header />,container);
        const title = container.querySelector('h6');
        expect(title).toHaveClass('MuiTypography-h6')
    })
})
it('h6 should have text DailyNews',() => {
    act(() => {
        render(<Header />, container);
        const h6 =  container.querySelector('h6');
        expect(h6.textContent).toBe('Daily News')
    })
})

it('header available',() => {
    act(() => {
        render(<Header />, container);
        const header =  container.querySelector('header');
        expect(header).toBeInTheDocument()
    })
})


it('div available',() => {
    act(() => {
        render(<Header />, container);
        const div =  container.querySelector('div');
        expect(div).toBeInTheDocument()
    })
})

export default Header;