import {
  HashRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { App } from '../App';
import { HoroPage } from '../pages/HoroPage';
import { AppContextProvider } from './AppContext';
import { FbChatLanding } from '../pages/fbChatLp/FbChatLanding';
import { Stripe } from '../pages/payments/Stripe';

export const Root = () => (
  
  <HashRouter>
    <AppContextProvider>
    <Routes>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/" element={<App />} >
        <Route index element={<h1 className='title'>Home page</h1>} />
        <Route path='horo' element={<HoroPage />} />
        <Route path='fb' element={<FbChatLanding />} />
        <Route path='pay' element={<Stripe />} />
      </Route>
    </Routes>
    </AppContextProvider>
  </HashRouter>
)
