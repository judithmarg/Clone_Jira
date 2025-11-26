import { createSlice } from "@reduxjs/toolkit";
import { tasksHardcoded } from "./defaultData/tasksDefault";
import { usersDefault } from "./defaultData/usersDefault";

const dataInLocalStorage = localStorage.getItem("jiraData");

const initialState = {
    users: usersDefault,
    currentUser: null,
    tasks: tasksHardcoded,
    selectedTask: null,
}

const jiraSlice = createSlice({
    name: 'jira',
    initialState: dataInLocalStorage? JSON.parse(dataInLocalStorage): initialState,
    reducers: {
        createTask: (state, action) => {
            const { titleA, statusA, assigneA } = action.payload;
            const today = new Date();
            const dateString = today.toISOString().split('T')[0];
            const newTask = { id: crypto.randomUUID(), title: titleA, description: '', assignee: assigneA, type:'✅-TASK', status: statusA, createdAt: dateString };
            state.tasks.push(newTask);
            state.selectedTask = newTask;
        },
        selectTask: (state, action) => {
            state.selectedTask = action.payload
        },
        editDetails: (state, action) => {
            state.tasks = state.tasks.map(t => state.selectedTask.id === t.id ? { ...t, description: action.payload } : t)
        },
        updateStatus: (state, action) => {
            state.tasks = state.tasks.map(t => state.selectedTask.id === t.id ? { ...t, status: action.payload } : t)
        },
        registerUser: (state, action) => {
             const {username, password, role} = action.payload
            state.users.push({id:crypto.randomUUID(), name:username, password:password, role: role, avatar: 'src/assets/five.jpg'})
        },
        loginUser: (state, action) => {
            const {username, password} = action.payload
            state.currentUser = state.users.find(user => user.name === username && user.password === password)
        },
        logoutUser: (state) => {
            state.currentUser = null
        }

    }
})

export const { createTask, editDetails, assignPerson, updateStatus, selectTask, registerUser, loginUser, logoutUser} = jiraSlice.actions
export default jiraSlice.reducer