import { createTheme } from '@mui/material'


const themeMode = {
  "light": {
    background: "#FFECF8",
    magent: "#FDD0EC",
    purple: "#F8EEFE",
    neutral: "#1F1F21"
  },
  "dark": {
    background: "#676565ff",
    magent: "#77325B",
    purple: "#35243F",
    neutral: "#F8F8F8"
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
        main: themeMode[mode].neutral
      }
    },
    typography: {
      fontFamily: '"Roboto", sans-serif',
      color: mode === "dark" ? "white" : "black"
    }
  })
}
