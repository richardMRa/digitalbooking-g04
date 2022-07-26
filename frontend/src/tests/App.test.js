import App from '../App';
import React from 'react';
import { ReactDOM } from 'react';
import { render, screen, act, fireEvent, cleanup, prettyDOM } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

test('should render App', () => {
    let view = render(
        <App />
    );
    console.log(prettyDOM(view.container));

})