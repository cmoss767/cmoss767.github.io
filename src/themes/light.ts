import { createTheme, ThemeOptions } from "@mui/material"

const theme: ThemeOptions = {
    palette: {
        primary: {
            light: "#808080",
            main: "#FFFFFF",
            dark: "#D3D3D3"
        },


        secondary: {
            main: "#000000",
        },
        text: {
            primary: "#000000",
            secondary: "#FFFFFF",
        },
    },






}

export default createTheme(theme)