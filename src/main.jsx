import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { TripsProvider } from './context/TripsContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TripsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TripsProvider>
  </StrictMode>,
)
