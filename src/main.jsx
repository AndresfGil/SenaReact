import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './Store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router/AppRouter'
import { MainPage } from './Main/pages/MainPage'
import { AuthRoutes } from './Auth/routes/AuthRoutes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
