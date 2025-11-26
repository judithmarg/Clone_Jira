import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({children}) => {
    const allowedUser = JSON.parse(localStorage.getItem("jiraData"));
    const currentUser = useSelector(state => state.jira.currentUser);
    if(allowedUser?.currentUser === null){ return  <Navigate to="/login" replace/>};
    return (currentUser !== null ? children: <Navigate to="/login" replace/>)
}
