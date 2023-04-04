import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'


// ReactDOM.render(  <BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'));

import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('root')).render( <App /> )