import { useRef } from "react";
import { Box, Button, TextField, InputAdornment, Paper } from "@mui/material";
import dayjs from "dayjs";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { styled } from "@mui/material/styles";
import { DateField } from '@mui/x-date-pickers/DateField';

import ButtonElement from "../../components/ButtonElement";
import ContainerElement from "../../components/ContainerElement";
import avitonLogo from "../../assets/avitonLogo.png"

const RegistrationForm = () => {
    const fileInput = useRef(null);

    const CustomTextField = styled(TextField,
        {
            name: 'MuiInput',
            slot: 'root',
        }
    )(({ theme }) => ({
        '& .MuiOutlinedInput-root': {
            borderRadius: '1rem',
            fontSize: '14px',
            color: '#1E2337',
        },
        '& .MuiInputLabel-outlined': {
            fontWeight: 600, // Значение по умолчанию, если не указано
            backgroundColor: 'white',
            paddingRight: 5,
            color: '#9e9e9e',
        },
    }));

    const CustomDateField = styled(DateField,
        {
            name: 'MuiDate',
            slot: 'root',
        }
    )(({ theme }) => ({
        '& .MuiOutlinedInput-root': {
            borderRadius: '1rem',
            fontSize: '14px',
            color: '#1E2337',
        },
        '& .MuiInputLabel-outlined': {
            fontWeight: 600, // Значение по умолчанию, если не указано
            backgroundColor: 'white',
            paddingRight: 5,
            color: '#9e9e9e',
        },
    }));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 3 }}>
            <ContainerElement>
                <Box sx={{ dispaly: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ dispaly: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 'fit-content', mx: 'auto', mb: 5 }}>
                        <Paper sx={{
                            width: '5rem',
                            p: 0,
                            mx: 'auto',
                            height: '5rem',
                            mb: '.5em',
                            backgroundImage: `url(${avitonLogo})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: 'center',
                            borderRadius: '50%'
                        }}
                        />

                        <Button
                            sx={{ py: 0 }}
                            onClick={() => fileInput.current.click()}
                        >
                            Выбрать фото
                        </Button>

                        <input type="file" ref={fileInput} className='none' />
                    </Box>

                    <Box
                        component='form'
                        autoComplete='off'
                        sx={{ w: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
                    >
                        <CustomTextField
                            required
                            placeholder='vano'
                            label="Username"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">@</InputAdornment>,
                            }}
                            sx={{ minWidth: '100%' }}
                        />
                        <CustomTextField
                            required
                            label="Имя"
                            defaultValue='Иван'
                            sx={{ minWidth: '100%' }}
                        />
                        <CustomTextField
                            required
                            label="Фамилия"
                            defaultValue='Иванов'
                            sx={{ minWidth: '100%' }}
                        />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <CustomDateField
                                format="DD.MM.YYYY"
                                required
                                label="Дата рождения"
                                defaultValue={dayjs('2006-04-17')}
                                sx={{ minWidth: '100%' }}
                            />
                        </LocalizationProvider>
                        <CustomTextField
                            multiline
                            label="О себе"
                            rows={3}
                            sx={{ minWidth: '100%' }}
                            defaultValue='Иван Иванов, барыга, 13 лет'
                        />
                    </Box>
                </Box>
            </ContainerElement>

            <ButtonElement
                title='Продолжить'
                styles={{ fontWeight: 600, fontSize: '.95rem', borderRadius: '2rem', padding: '.5rem .9rem', alignSelf: 'center' }}
                props={{ variant: "contained", color: "secondary" }}
            />
        </Box>

    );
}

export default RegistrationForm;