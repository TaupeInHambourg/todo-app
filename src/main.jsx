import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button, NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Button
        color='primary'
      > Mon bouton
      </Button>
    </NextUIProvider>
  </React.StrictMode>
)
