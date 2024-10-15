import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HiddenContextProvider } from './context/HiddeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HiddenContextProvider>
      <App />
    </HiddenContextProvider>
  </StrictMode>,
)
