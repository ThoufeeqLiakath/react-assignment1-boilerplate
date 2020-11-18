import Dashboard from '../Components/dashboard/Dashboard';
import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';

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
// it('image is not available',() => {
//     act(() => {
//         render(<Dashboard />,container);
//         const title = container.querySelector('img');
//         expect(title).toBeNull()
//     })
// })
// it('buttton is not available',() => {
//     act(() => {
//         render(<Dashboard />,container);
//         const title = container.querySelector('button');
//         expect(title).toBeNull()
//     })
// })
it('div is available',() => {
    
    act(() => {
        render(<Dashboard />, container);
        const title = container.querySelector('div');
        expect(title).toBeInTheDocument()
    })
})
// it('button should have text ReadLater',() => {
 
//     act(() => {
//         render(<Dashboard />, container);
//         const h6 =  container.querySelector('button');
//         expect(h6.textContent).toBe('READ LATER')
//     })
// })

// it('button available',() => {
//     act(() => {
//         render(<Dashboard />, container);
//         const button =  container.querySelector('button');
//         expect(button).toBeInTheDocument()
//     })
// })



export default Dashboard;