import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from '@radix-ui/themes'
import App from './App.tsx'
import '@radix-ui/themes/styles.css'
import './styles/global.css'
import './styles/responsive.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme 
      accentColor="orange" 
      grayColor="slate"
      radius="medium"
      scaling="100%"
    >
      <App />
    </Theme>
  </React.StrictMode>,
)
