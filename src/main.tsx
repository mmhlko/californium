import ReactDOM from 'react-dom/client'
import './app/styles/index.scss'
import React from 'react'
import App from './app/App'
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './storage/store'

//const Router = import.meta.env.DEV ? BrowserRouter : HashRouter;
console.log("is DEV", import.meta.env.DEV);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </React.StrictMode>,
)