import { Box, Button, Input, InputAdornment, InputLabel, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import styles from './Login.module.css';
import { InputText } from '../shared/InputText';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import { useLogin } from '../../hooks/useLogin';
import { Toaster } from 'react-hot-toast';

export const Login = () => {
    const { username, password, handleOnChange, handleSubmit, handleBack } = useLogin();

    return (
        <Box className={styles.container} sx={{ backgroundColor: 'background.default' }}>
            <Toaster />
            <Typography sx={{ fontSize: '24px', color: 'neutral.main' }}>Login</Typography>
            <InputText
                title='Username'
                Icon={<AccountCircle />}
                type='text'
                name='username'
                value={username}
                handleOnChange={handleOnChange}
            />
            <InputText
                title='Password'
                Icon={<KeyOutlinedIcon />}
                type='password'
                name='password'
                value={password}
                handleOnChange={handleOnChange}
            />
            <Box sx={{display:'flex', gap:'16px'}}>
                <Button onClick={handleBack} sx={{ color: 'neutral.main', fontWeight: '600' }}>Register</Button>
                <Button onClick={handleSubmit} sx={{ backgroundColor: 'neutral.secondary', color: 'neutral.contrast', fontWeight: '600' }}>Login</Button>
            </Box>
        </Box>
    )
}
