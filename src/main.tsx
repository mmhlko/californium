import ReactDOM from 'react-dom/client'
import './app/styles/index.scss'
import React from 'react'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './storage/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)