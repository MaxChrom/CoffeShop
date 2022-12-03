import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./Coffee-shop/App";
import ContextsProvider from "./Coffee-shop/Context/ContextsProvider";
 
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
 <React.StrictMode>
        <ContextsProvider>
            <App />
        </ContextsProvider>
    </React.StrictMode>
);