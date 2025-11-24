// import './App.css'
import { useRoutes } from 'react-router-dom';
import { allRoutes } from './routes/routes';
import { getTheme } from './theme/getTheme';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';

function AppRoutes() {
  const mainRoutes = useRoutes(allRoutes);
  return mainRoutes;
}

function App() {
  const colorTheme = useSelector((state) => state.theme.colorTheme)
  const themeSelected = getTheme(colorTheme);

  return (
    <ThemeProvider theme={themeSelected}>
      <AppRoutes />
    </ThemeProvider>)
}

export default App
