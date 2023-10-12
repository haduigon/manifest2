/* eslint-disable */
import 'bulma/css/bulma.css'
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';

export const App: React.FC = () => {

  return (
    <div>
      <div className='has-text-centered'>
        <h3 className='title is-3 mt-4 has-text-danger-light'>
          Take your Horo forecast right now !
        </h3>
        <Navbar />
        {/* <ClipLoader color="#36d7b7" /> */}
      </div>
      <Outlet />
    </div>
  );
}

export default App;
