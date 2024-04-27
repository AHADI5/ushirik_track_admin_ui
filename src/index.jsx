
import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
import "./index.css"

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./module/auth/useAuth";
// import {AuthProvider} from './context/AuthProvider';

ReactDOM.render(
    <React.StrictMode>
       <BrowserRouter>
            
             <AuthProvider>
                <App />
             </AuthProvider>
       </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
 );
