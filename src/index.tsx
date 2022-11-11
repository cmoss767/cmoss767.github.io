import { ThemeProvider } from "@mui/material"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import main from "./themes/theme"


import Router from "./router"







ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={main}>
     <BrowserRouter>
             <Router/>
             </BrowserRouter>
             </ThemeProvider>
            
    </React.StrictMode>
)