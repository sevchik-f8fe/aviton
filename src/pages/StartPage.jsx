import { Button, Typography, Stack, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import ContainerElement from "../components/ContainerElement";

const StartPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '90vh' }}>
            <Stack>
                <ContainerElement>
                    <Box sx={{ width: '100%', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <Box sx={{ borderRadius: '50%', width: '8em', height: '8em', backgroundColor: '#29b6f6', my: '.5em' }}></Box>
                        <Typography variant="h4" sx={{ fontWeight: '700' }}>
                            AviTon
                        </Typography>
                    </Box>

                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <LoyaltyIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, my: .5 }}>Покупайте и продавайте</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ShoppingCartIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, my: .5 }}>Удобная корзина</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <EmojiEventsIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, my: .5 }}>Розыгрыши</Typography>
                        </ListItem>
                    </List>
                </ContainerElement>
            </Stack>

            <Stack gap={1}>
                <Button variant="contained" color="primary" sx={{ color: 'white' }}>
                    Привязать кошелёк
                </Button>

                <Button variant="contained" color="secondary">
                    Создать новый аккаунт
                </Button>

                <Button>
                    Пропустить
                </Button>
            </Stack>
        </Box>
    );
}

export default StartPage;