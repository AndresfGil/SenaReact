import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthLayout } from './Auth/layout/AuthLayout'
import { LoginPage } from './Auth/pages/LoginPage'
import { RegisterPage } from './Auth/pages/RegisterPage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegisterPage />
  </React.StrictMode>
)
