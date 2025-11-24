import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";
import jiraReducer from "./slice/jiraSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        jira: jiraReducer
    }
})