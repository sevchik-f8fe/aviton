import { Box } from "@mui/material";

const ContainerElement = ({ children }) => {
    return (
        <Box sx={{ borderRadius: '.5em', backgroundColor: 'white', p: '.8em' }}>
            {children}
        </Box>
    );
}

export default ContainerElement;