import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './components/store/store.js';
import { HelmetProvider } from 'react-helmet-async';

const serv = true;
axios.defaults.baseURL = serv ? "https://modularesapi-production.up.railway.app" : "http://192.168.1.15:3000";

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
    </HelmetProvider>
  ,
)
