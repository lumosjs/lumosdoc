import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './styles/boxicons-2.1.4/css/boxicons.min.css'

import { BrowserView, MobileView} from 'react-device-detect';

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
