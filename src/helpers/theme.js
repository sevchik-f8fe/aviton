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
        MuiTextField: {
            styleOverrides: {
                root: {
                    '&.MuiInputBase-root': {
                        borderRadius: '16px', // Значение по умолчанию для скругленных углов
                    },
                },
            },
        },
    },
});