import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import './index.css';
import Book from './pages/Book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Book />
  </React.StrictMode>,
);
