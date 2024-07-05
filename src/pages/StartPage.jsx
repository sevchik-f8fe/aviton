import { Button, Typography, Stack, Box, List, ListItem, ListItemIcon, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { TonConnectButton } from "@tonconnect/ui-react";
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import ContainerElement from "../components/ContainerElement";
import avitonLogo from "../assets/avitonLogo.png"

const StartPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '90vh' }}>
            <Stack>
                <ContainerElement>
                    <Box sx={{ width: '100%', display: "flex", justifyContent: 'center' }}>
                        <Paper sx={{
                            width: '10rem',
                            p: 0,
                            height: '10rem',
                            mb: '.5em',
                            backgroundImage: `url(${avitonLogo})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: 'center',
                            borderRadius: '50%',
                        }}
                        />
                    </Box>

                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <LoyaltyIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, my: .5, color: '#1E2337' }}>Покупайте и продавайте</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ShoppingCartIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, my: .5, color: '#1E2337' }}>Удобная корзина</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <EmojiEventsIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, my: .5, color: '#1E2337' }}>Розыгрыши</Typography>
                        </ListItem>
                    </List>
                </ContainerElement>
            </Stack>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', flexDirection: 'column', gap: 1 }}>
                <TonConnectButton
                    actionConfiguration={{
                        twaReturnUrl: 'https://t.me/aviton123_bot'
                    }}

                />

                <Link to="/login">
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ fontWeight: 600, fontSize: '.95rem', borderRadius: '2rem', padding: '.5rem .9rem' }}
                    >
                        Создать аккаунт
                    </Button>
                </Link>

                <Button
                    sx={{ fontWeight: 600, fontSize: '.95rem', borderRadius: '2rem', padding: '.5rem .9rem' }}
                >
                    Пропустить
                </Button>
            </Box>
        </Box>
    );
}

export default StartPage;