import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'


// ReactDOM.render(  <BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'));

import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('root')).render( <App />, document.body.style.background = "#212121", document.body.style.color = "#B3BFB8", document.body.style.fontFamily="verdana", document.body.style.fontWeight="100")
//header (serif) p tag (sans-serif)