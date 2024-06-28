import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

{/* <link rel="shortcut icon" href="./assets/favicon.ico" type="image/x-icon" /> */}
export const server = import.meta.env.VITE_SERVER
export const stripe_key = import.meta.env.VITE_STRIPE_KEY

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  </React.StrictMode>,
)
