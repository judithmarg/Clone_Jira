import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorTheme: "light"
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.colorTheme = state.colorTheme === "light" ? "dark" : "light";
        }
    }
})

export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer