import { createTheme, ThemeOptions } from "@mui/material"

const theme: ThemeOptions = {
    palette: {
        primary: {
            main: "#3F98EF",
        },

        secondary: {
            main: "#19183F",
        },
        success: {
            light: "#D9F7C9",
            main: "#52C428",
        },
        warning: {
            light: "#F7EEDA",
            main: "#C4B229",
        },
        error: {
            light: "#FFE8DE",
            main: "#ED400C",
        },
        info: {
            light: "#EDF4FE",
            main: "#3F98EF",
        },

        text: {
            primary: "#191919",
            secondary: "#9c9c9c",
        },
    },
    typography: {
        fontFamily: "Montserrat, sans-serif",
    },
    mixins: {
        toolbar: {
            minHeight: 74,
            "@media (min-width:0px)": {
                "@media (orientation: landscape)": {
                    minHeight: 74,
                },
            },
            "@media (min-width:600px)": {
                minHeight: 74,
            },
        },
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                filled: ({ theme, ownerState }) => ({
                    backgroundColor: theme.palette[ownerState?.severity || "info"].light,
                    color: theme.palette[ownerState?.severity || "info"].main,
                }),
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "initial",
                    padding: "0 18px",
                    minHeight: "initial",
                    "&.Mui-disabled": {
                        opacity: 0.5,
                    },
                },
                contained: {
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                    },
                },

                containedPrimary: ({ theme }) => ({
                    backgroundColor: `${theme.palette.primary.main} !important`,
                    color: "#fff !important",
                }),

                containedSecondary: ({ theme }) => ({
                    backgroundColor: `${theme.palette.secondary.main} !important`,
                    color: "#fff !important",
                }),
                containedSuccess: ({ theme }) => ({
                    backgroundColor: `${theme.palette.success.light} !important`,
                    color: `${theme.palette.success.main} !important`,
                }),
                containedWarning: ({ theme }) => ({
                    backgroundColor: `${theme.palette.warning.light} !important`,
                    color: `${theme.palette.warning.main} !important`,
                }),
                containedError: ({ theme }) => ({
                    backgroundColor: `${theme.palette.error.light} !important`,
                    color: `${theme.palette.error.main} !important`,
                }),
                textPrimary: ({ theme }) => ({
                    color: `${theme.palette.primary.main} !important`,
                }),
                textSecondary: ({ theme }) => ({
                    color: `${theme.palette.secondary.main} !important`,
                }),
                sizeSmall: {
                    height: 32,
                    fontSize: "0.875rem",
                },
                sizeMedium: {
                    height: 36,
                    fontSize: "1rem",
                },
                sizeLarge: {
                    height: 46,
                    fontSize: "1.125rem",
                },
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                color: "secondary",
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "0px 4px 6px #00000010;",
                    border: "1px solid #e6e6e6",
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: theme.spacing(0, 2),
                    backgroundColor: theme.palette.primary.main,
                    height: 44,
                }),
                title: {
                    fontSize: "0.875rem",
                    color: "#fff",
                },
            },
        },
        MuiInputLabel: {
            defaultProps: {
                shrink: true,
            },
            styleOverrides: {
                root: {
                    position: "relative",
                    fontSize: "0.75rem",
                    marginBottom: 4,
                },
                shrink: {
                    transform: "none",
                },
            },
        },
        MuiOutlinedInput: {
            defaultProps: {
                notched: false,
            },
        },
        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true,
            },
            styleOverrides: {
                root: ({ theme }) => ({
                    borderBottomLeftRadius: theme.shape.borderRadius,
                    borderBottomRightRadius: theme.shape.borderRadius,
                }),
            },
        },
        MuiInputBase: {
            defaultProps: {
                size: "small",
            },
            styleOverrides: {
                input: {
                    padding: "11.5px 14px !important",
                    "&.MuiSelect-select": {
                        padding: "11.5px 14px !important",
                    },
                },
                inputSizeSmall: {
                    padding: "6.5px 14px !important",
                    "&.MuiSelect-select": {
                        padding: "6.5px 14px !important",
                    },
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: 8,
                    boxShadow: "0px 4px 6px #00000010",
                    width: "100%",
                },
            },
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: theme.spacing(4.5),
                    fontSize: "1rem",
                    fontWeight: 500,
                }),
            },
        },
        MuiDialogContent: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: theme.spacing(4.5),
                }),
            },
        },
        MuiDialogActions: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: theme.spacing(4.5),
                    paddingTop: 0,
                    display: "flex",
                    justifyContent: "center",
                }),
            },
        },
        MuiChip: {
            styleOverrides: {
                label: {
                    fontWeight: 600,
                },

                root: {
                    height: 36,
                    borderRadius: 8,
                },
            },
        },
    },
}

export default createTheme(theme)