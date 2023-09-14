import './App.css';
import 'bulma/css/bulma.css'
import classNames from 'classnames';
import { useState } from 'react';
import GooglePayButton from '@google-pay/button-react';
import { GooglePayB } from './components/googlePay';

export const App: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);

  function hanldeClick() {
    setIsPressed(state => !state);
  }
  console.log(isPressed);

  return (
    <div>
      <div className='has-text-centered'>
        <h3 className='title is-3 mt-4 has-text-danger-light'>
          Take your Horo forecast right now !
        </h3>
      </div>
      <div className={classNames('box', {
        'has-text-centered': !isPressed,
      })}>
        <div className='box my-4 mx-6'>
          Hello, please select the horoscope theme
        </div>
        <div className='has-text-centered'>
          <button
            className='button is-primary'
            onClick={hanldeClick}
          >
            Ask my future
          </button>

          {isPressed && (
            <GooglePayB />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
