import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserView> 
      <App/>
    </BrowserView>
    <MobileView>
      <h1 className="text-2xl text-center">Abre no computador porfavor...</h1>
    </MobileView>
  </React.StrictMode>,
)
