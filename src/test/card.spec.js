
import Card from '../Components/card/Card';
import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';
import News from '../model/News';

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
it('image is not available',() => {
    act(() => {
        render(<Card />,container);
        const title = container.querySelector('img');
        expect(title).toBeNull()
    })
})
it('buttton is not available',() => {
    act(() => {
        render(<Card />,container);
        const title = container.querySelector('button');
        expect(title).toBeNull()
    })
})
it('img is available',() => {
    
    let currentNews=new News("fsdfsdf","fsdf","fsdf","https://media.wired.com/photos/5e471046e7120600088b2022/191:100/w_1280,c_limit/Security_robbocalls-84289419.jpg",",","fsdf");
    
    act(() => {
        render(<Card currentNews={currentNews}></Card>, container);
        const title = container.querySelector('img');
        expect(title).toBeInTheDocument()
    })
})
it('button should have text ReadLater',() => {
 
    let currentNews=new News("fsdfsdf","fsdf","fsdf","https://media.wired.com/photos/5e471046e7120600088b2022/191:100/w_1280,c_limit/Security_robbocalls-84289419.jpg",",","fsdf");
    
    act(() => {
        render(<Card currentNews={currentNews}></Card>, container);
        const h6 =  container.querySelector('button');
        expect(h6.textContent).toBe('READ LATER')
    })
})

it('button available',() => {
    
    let currentNews=new News("fsdfsdf","fsdf","fsdf","https://media.wired.com/photos/5e471046e7120600088b2022/191:100/w_1280,c_limit/Security_robbocalls-84289419.jpg",",","fsdf");
    
    act(() => {
        render(<Card currentNews={currentNews}></Card>, container);
        const button =  container.querySelector('button');
        expect(button).toBeInTheDocument()
    })
})


export default Card;