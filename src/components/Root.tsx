import {
  HashRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { App } from '../App';
import { HoroPage } from './HoroPage';
import { AppContextProvider } from './AppContext';

export const Root = () => (
  
  <HashRouter>
    <AppContextProvider>
    <Routes>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/" element={<App />} >
        <Route index element={<h1 className='title'>Home page</h1>} />
        <Route path='horo' element={<HoroPage />} />
      </Route>
    </Routes>
    </AppContextProvider>
  </HashRouter>
)
