import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/reset.css';
import Main from './js/Main';

const Root = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
