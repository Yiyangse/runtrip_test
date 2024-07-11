import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App.tsx';
import './index.css';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import MainContent from './components/MainContent.tsx';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
