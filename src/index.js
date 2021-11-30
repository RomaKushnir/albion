import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import RootStore, { StoreContext } from './store';
import { BrowserRouter } from 'react-router-dom';

const store = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
