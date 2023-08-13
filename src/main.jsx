import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { UserReducer } from './feature/userSlice.jsx'
import { themeReducer } from './feature/Theme.jsx'


const Store = configureStore({
  reducer: {
    user: UserReducer,
    theme:themeReducer
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
