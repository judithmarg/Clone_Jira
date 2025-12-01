import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useState } from 'react'
import { loginUser } from '../store/slice/jiraSlice';
import toast from 'react-hot-toast';

const inputForm = {
    username: "",
    password: ""
}

export const useLogin = () => {
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
        const correctUser = users.some(u => u.name === username && u.password === password)
        if (!correctUser) {
            toast.error("Incorrect username or password");
        } else {
            dispatch(loginUser(form))
            navigate("/board")
        }
    }

    return { form, username, password, users, handleOnChange, handleSubmit }
}
