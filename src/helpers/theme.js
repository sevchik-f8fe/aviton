import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0098EA',
        },
        secondary: {
            main: '#1E2337',
        }
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    transition: 'transform 0.3s ease',
                    //     '&:hover': {
                    //         transform: 'scale(1.05)'
                    //     },
                    //     '&:active': {
                    //         transform: 'scale(1.02)'
                    //     },
                },
            },
        },
    },
});