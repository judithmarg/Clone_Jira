import { Box, Button, Input, InputAdornment, InputLabel, Typography } from '@mui/material';
import { useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import styles from './Login.module.css';
import { InputText } from '../shared/InputText';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/slice/jiraSlice';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const inputForm = {
    username: "",
    password: ""
}
export const Login = () => {
    const [form, setForm] = useState(inputForm);
    const { username, password } = form;
    const users = useSelector(state => state.jira.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        if (username === null && password === null) return;
        const correctUser = users.some(u=> u.name === username && u.password === password)
        if(!correctUser) return;
        dispatch(loginUser(form))
        navigate("/board")
    }

    return (
        <Box className={styles.container} sx={{ backgroundColor: 'background.default' }}>
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
            <Button onClick={handleSubmit} sx={{ backgroundColor: 'neutral.secondary', color: 'neutral.contrast', fontWeight: '600' }}>Login</Button>
        </Box>
    )
}
