import { createTheme } from '@mui/material'

let themeMode = []
themeMode["light"] = {
    backgroung: "#FFECF8",
    magent: "#FDD0EC"
}
themeMode["dark"] = {
    backgroung: "#1e1e1eff",
    magent: "#77325B"
}
export const getTheme = (mode) => {
  createTheme({
    palette: {
        mode, ...themeMode[mode]
    },
    typography: {
        fontFamily: '"Roboto", sans-sarif',
        color: mode === "dark"? "white" : "black"
    }
  })
}
