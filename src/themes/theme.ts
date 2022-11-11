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
    typography: {
        fontFamily: "'Open Sans', sans-serif;",
        h1: {
            fontSize: "1.5rem", // 24px
            fontWeight: 700, // bold
        },
        h2: {
            fontSize: "1.125rem", // 18px
            fontWeight: 700, // bold
        },
        h3: {
            fontSize: "1rem", // 16px
            fontWeight: 700, // bold
        },
        h4: {
            fontSize: "1.125rem", // 18px
            fontWeight: 600, // semi-bold
        },
        h5: {
            fontSize: "1rem", // 16px
            fontWeight: 600, // semi-bold
        },
        h6: {
            fontSize: "0.875rem", // 14px
            fontWeight: 600, // semi-bold
        },
        body1: {
            fontSize: "1rem", // 16px
            fontWeight: 400, // regular
        },
        body2: {
            fontSize: "0.875rem", // 14px
            fontWeight: 400, // regular
        },
        subtitle1: {
            fontSize: "0.8125rem", // 13px
            fontWeight: 400, // regular
        },
        subtitle2: {
            fontSize: "0.75rem", // 12px
            fontWeight: 400, // regular
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "containedRounded" },
                    style: ({ theme }) => {
                        return {
                            borderRadius: "9999px",
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            border: "1px solid #D6D6D6",
                            "&:hover": {
                                borderColor: theme.palette.primary.main,
                            },
                            "&.Mui-disabled": {
                                backgroundColor: "rgba(0, 0, 0, 0.12)",
                                color: "rgba(0, 0, 0, 0.26)",
                            },
                        }
                    },
                },
            ]
        }
    }








}

export default createTheme(theme)