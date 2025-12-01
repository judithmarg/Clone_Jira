import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/slice/jiraSlice';
import { useNavigate } from 'react-router';

const inputForm = {
    username: "",
    password: "",
    role: "Developer"
}

export const useRegister = () => {
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

    return {form, username, password, role, handleOnChange, handleSubmit}
}
