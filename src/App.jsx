import './App.css'
import { useRoutes } from 'react-router-dom';
import { allRoutes } from './routes/routes';

function App() {
  const mainRoutes = useRoutes(allRoutes);
  return mainRoutes;
}

export default App
