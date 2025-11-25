import { createSlice } from "@reduxjs/toolkit";
import { tasksHardcoded } from "./defaultData/tasksDefault";
import { usersDefault } from "./defaultData/usersDefault";

const dataInLocalStorage = localStorage.getItem("jiraData");

const initialState = {
    users: usersDefault,
    tasks: tasksHardcoded,
    selectedTask: null,
}

const jiraSlice = createSlice({
    name: 'jira',
    initialState: dataInLocalStorage? JSON.parse(dataInLocalStorage): initialState,
    reducers: {
        createTask: (state, action) => {
            const { titleA, statusA } = action.payload;
            const today = new Date();
            const dateString = today.toISOString().split('T')[0];
            state.tasks.push({ id: crypto.randomUUID(), title: titleA, description: '', assignee: '', status: statusA, createdAt: dateString })
        },
        selectTask: (state, action) => {
            console.log("mirenme", action.payload)
            state.selectedTask = action.payload
        },
        editDetails: (state, action) => {
            // state.selectedTask = {...state.selectedTask, description: action.payload}
            state.tasks = state.tasks.map(t => state.selectedTask.id === t.id ? { ...t, description: action.payload } : t)
        },
        assignPerson: (state, action) => {
            // state.selectedTask = {...state.selectedTask, asignee: action.payload}
            state.tasks = state.tasks.map(t => state.selectedTask.id === t.id ? { ...t, asignee: action.payload } : t)
        },
        updateStatus: (state, action) => {
            // state.selectedTask =  {...state.selectedTask, status: action.payload}
            state.tasks = state.tasks.map(t => state.selectedTask.id === t.id ? { ...t, status: action.payload } : t)
        },

    }
})

export const { createTask, editDetails, assignPerson, updateStatus, selectTask } = jiraSlice.actions
export default jiraSlice.reducer