import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './Store'
import { Provider } from 'react-redux'
import { AuthLayout } from './Auth/layout/AuthLayout'
import { LoginPage } from './Auth/pages/LoginPage'
import { RegisterPage } from './Auth/pages/RegisterPage'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router/AppRouter'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
