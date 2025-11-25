import { createSlice } from "@reduxjs/toolkit";
import { tasksHardcoded } from "./defaultData/tasksDefault";
import { usersDefault } from "./defaultData/usersDefault";

const dataInLocalStorage = localStorage.getItem("jiraData");

const initialState = {
    users: usersDefault,
    curretUser: null,
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
            state.tasks.push({ id: crypto.randomUUID(), title: titleA, description: '', assignee: assigneA, type:'✅-TASK', status: statusA, createdAt: dateString })
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
        loginUser: (state, action) => {
            state.curretUser = action.payload
            state.users.push(action.payload)
        },
        logoutUser: (state) => {
            state.curretUser = null
        }

    }
})

export const { createTask, editDetails, assignPerson, updateStatus, selectTask } = jiraSlice.actions
export default jiraSlice.reducer