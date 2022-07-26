import Register from '../components/Register/Register';
import React from 'react';
import {render, prettyDOM} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

test ('should render component', () => {
    let view = render(<BrowserRouter>
            <Register/>
            </BrowserRouter>);

        console.log(prettyDOM(view.container));

})