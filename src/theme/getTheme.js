import { createTheme } from '@mui/material'


const themeMode = {
  "light": {
    background: "#FFECF8",
    magent: "#FDD0EC"
  }, "dark": {
    background: "#676565ff",
    magent: "#77325B"
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
      }
    },
    typography: {
      fontFamily: '"Roboto", sans-serif',
      color: mode === "dark" ? "white" : "black"
    }
  })
}
