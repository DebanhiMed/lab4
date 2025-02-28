import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Card } from './Card.jsx'
import { CustomHook } from './CustomHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomHook />
  </StrictMode>,
)
