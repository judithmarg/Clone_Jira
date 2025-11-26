import { createTheme } from '@mui/material'


const themeMode = {
  "light": {
    background: "#FFECF8",
    magent: "#FDD0EC",
    purple: "#F8EEFE",
    purple2: "#F8EEFE",
    neutral: "#1F1F21",
    neutral2: "#6c0559ff",
    contrast: "#FFFFFF",
    magentDark: "#50253F",
    texti: "#000",
    textii: "#020202ff"
  },
  "dark": {
    background: "#434343ff",
    magent: "#77325B",
    purple: "#35243F",
    purple2: "#8d7999",
    neutral: "#F8F8F8",
    neutral2: "#f4bde0ff",
    contrast: "#1E1F21",
    magentDark: "#50253F",
    texti: "#fff",
    textii: "#1e1717ff",
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
        main: themeMode[mode].purple,
        secondary: themeMode[mode].purple2
      },
      neutral: {
        main: themeMode[mode].neutral,
        secondary: themeMode[mode].neutral2,
        contrast: themeMode[mode].contrast,
        tertiary: themeMode[mode].magentDark
      },
      text: {
        primary: themeMode[mode].texti,
        secondary: themeMode[mode].textii
      }
    },
    typography: {
      fontFamily: '"Inter", sans-serif',
      color: mode === "dark" ? "white" : "black"
    }
  })
}
