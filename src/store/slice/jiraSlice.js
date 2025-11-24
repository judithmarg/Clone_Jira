import { createSlice } from "@reduxjs/toolkit";
import { tasksHardcoded } from "./defaultData/tasksDefault";

const initialState = {
    users: [
        { id: crypto.randomUUID(), name: "userRose", password: "123", role: "Developer"},
        { id: crypto.randomUUID(), name: "userTram", password: "123", role: "Developer"},
        { id: crypto.randomUUID(), name: "userPhd", password: "123", role: "QA"},
        { id: crypto.randomUUID(), name: "userMuss", password: "123", role: "QA"},
    ],
    tasks: tasksHardcoded,
    selectedTask: null,
}

const jiraSlice = createSlice({
    name: 'jira',
    initialState,
    reducers: {
        createTask: (state, action) => {
            const {titleA, statusA} = action.payload
            state.tasks.push({id: crypto.randomUUID(), title:titleA, description: '', assignee:'', status:statusA, createdAt: new Date().toISOString() })
        },
        editDetails: (state, action) => {
            state.selectedTask = {...state.selectedTask, description: action.payload}
        },
        assignPerson: (state, action) => {
            state.selectedTask = {...state.selectedTask, asignee: action.payload}
        }
    }
})

export const {createTask, editDetails, assignPerson} = jiraSlice.actions
export default jiraSlice.reducer