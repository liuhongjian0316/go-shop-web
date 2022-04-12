import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import "./index.scss";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';



// react 18 之前
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter basename={import.meta.env.VITE_PUBLIC_PATH as string}>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// react 18
const container = document.getElementById('root');
const root = createRoot(container as any);
root.render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.VITE_PUBLIC_PATH as string}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals(console.log);