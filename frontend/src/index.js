import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MyBooksContextProvider } from './context/MyBooksContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyBooksContextProvider>
      <App />
    </MyBooksContextProvider>
  </React.StrictMode>
);

