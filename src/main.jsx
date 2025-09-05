import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import Store, { persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store} >
       <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
      <App />
      <ToastContainer/>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
