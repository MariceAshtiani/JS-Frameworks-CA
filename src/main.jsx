import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Theme from "./styles/Theme.jsx";
import GlobalStyle from "./styles/GlobalStyles.jsx";
import { BrowserRouter } from 'react-router-dom'
import { Context } from "./components/Context";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Theme>
          <GlobalStyle />
          <App />
        </Theme>
      </Context>
    </BrowserRouter>
  </React.StrictMode>,
)
