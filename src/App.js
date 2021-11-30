import { Routes, Route } from 'react-router-dom';
import appRoutes from './routes';
import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import Player from 'pages/Player';
import WrongRoute from './pages/WrongRoute';

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path={appRoutes.ROOT} element={<Home />} />
        <Route path={appRoutes.PLAYER} element={<Player />} />
        <Route path={appRoutes.NOT_MATCHED} element={<WrongRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
