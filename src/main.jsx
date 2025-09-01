import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import Store, { persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store} >
       <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
