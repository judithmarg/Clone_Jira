import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'

export const useSelectAvatar = ({nameAvatar, updateAssign}) => {
    const users = useSelector((state) => state.jira.users);
    const user = users.find(u => u.name === nameAvatar);
    const [asigneeUser, setAsigneeUser] = useState(user);


    const handleOnChange = (e) => {
        const newAvatar = e.target.value;
        updateAssign(newAvatar)
        setAsigneeUser(newAvatar)
    }

    return { users, asigneeUser, handleOnChange}
}
