import { useState } from 'react'

const inputForm = {
    email: "",
    password: "",
    role: ""
}
export const Register = () => {
    const [form, setForm] = useState(inputForm);
    const { email, password, role } = form;

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
            <div>
                <label htmlFor="role">Email:</label>
                <input type="text" name='role' value={role} onChange={handleOnChange} />
            </div>
            <button>Login</button>
        </div>
    )
}
