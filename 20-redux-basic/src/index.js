import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import counterStore from './store';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={counterStore}><App /></Provider>);
