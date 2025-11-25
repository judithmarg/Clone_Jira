
const localStorageMiddleware = (store) => (next) => async(action) => {
    const result = next(action)
    const state = store.getState();
    localStorage.setItem("jiraData", JSON.stringify(state.jira));

    return result
}

export default localStorageMiddleware;
