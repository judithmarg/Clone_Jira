import { useState } from 'react'

const inputForm = {
    email: "",
    password: ""
}
export const Login = () => {
    const [form, setForm] = useState(inputForm);
    const { email, password } = form;

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" name='email' value={email} onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name='password' value={password} onChange={handleOnChange} />
            </div>
            <button>Login</button>
        </div>
    )
}
