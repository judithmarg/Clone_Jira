import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";
import jiraReducer from "./slice/jiraSlice";
import localStorageMiddleware from "./middleware/localStorageMiddleware" 

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        jira: jiraReducer
    },
    middleware: (getDefault) => getDefault().concat(localStorageMiddleware),
})