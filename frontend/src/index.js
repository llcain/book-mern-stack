import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MyBooksContextPrivider } from './context/MyBooksContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyBooksContextPrivider>
      <App />
    </MyBooksContextPrivider>    
  </React.StrictMode>
);

