import { createTheme } from '@mui/material'


const themeMode = {
  "light": {
    background: "#FFECF8",
    magent: "#FDD0EC",
    purple: "#F8EEFE",
    neutral: "#1F1F21",
    neutral2: "#6c0559ff"
  },
  "dark": {
    background: "#676565ff",
    magent: "#77325B",
    purple: "#35243F",
    neutral: "#F8F8F8",
    neutral2: "#f4bde0ff"
  }
}

export const getTheme = (mode) => {
   return createTheme({
    palette: {
      mode,
      background: {
        default: themeMode[mode].background
      },
      primary: {
        main: themeMode[mode].magent
      },
      secondary: {
        main: themeMode[mode].purple
      },
      neutral: {
        main: themeMode[mode].neutral,
        secondary: themeMode[mode].neutral2
      }
    },
    typography: {
      fontFamily: '"Inter", sans-serif',
      color: mode === "dark" ? "white" : "black"
    }
  })
}
