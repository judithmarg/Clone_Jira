import { useState } from 'react';
import { Box, Button, ButtonGroup, Input, InputAdornment, InputLabel, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import styles from './Register.module.css';
import { InputText } from '../shared/InputText';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/slice/jiraSlice';
import { useNavigate } from 'react-router';

const inputForm = {
    username: "",
    password: "",
    role: "Developer"
}
export const Register = () => {
    const [form, setForm] = useState(inputForm);
    const { username, password, role } = form;
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
        if(username === null && password === null && role==="") return;
        dispatch(registerUser(form))
        navigate('/login')
    }

    return (
        <Box className={styles.container} sx={{ backgroundColor: 'background.default' }}>
            <Typography sx={{ fontSize: '24px', color: 'neutral.main' }}>Register</Typography>
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
            <ToggleButtonGroup
                defaultValue="developer"
                variant="outlined"
                className={styles.buttonGroup}
                value={role}
                onChange={(e) => handleOnChange({ target: { name: e.target.name, value: e.target.value } })
                }>
                <ToggleButton
                    className={styles.buttonToggle}
                    sx={{
                        color: 'neutral.tertiary',
                        "&.Mui-selected": {
                            backgroundColor: "hotpink",
                            borderColor: "deeppink",
                            color: "white",
                        },
                        "&.Mui-selected:hover": {
                            backgroundColor: "hotpink",
                        }
                    }}
                    name="role"
                    value="Developer"
                >
                    Developer
                </ToggleButton >
                <ToggleButton
                    className={styles.buttonToggle}
                    sx={{
                        color: 'neutral.tertiary',
                        "&.Mui-selected": {
                            backgroundColor: "pink",
                            borderColor: "deeppink",
                            color: "white",
                        },
                        "&.Mui-selected:hover": {
                            backgroundColor: "hotpink",
                        }
                    }}
                    name="role"
                    value="QA"
                >
                    QA
                </ToggleButton >
            </ToggleButtonGroup>
            <Button onClick={handleSubmit} sx={{ backgroundColor: 'neutral.secondary', color: 'neutral.contrast', fontWeight: '600' }}>Register</Button>
        </Box>
    )
}
