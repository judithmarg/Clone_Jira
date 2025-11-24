import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorTheme: "light"
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.colorTheme = action.payload
        }
    }
})

export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer