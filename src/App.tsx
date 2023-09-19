/* eslint-disable */
import 'bulma/css/bulma.css'
import classNames from 'classnames';
import { useState } from 'react';
import { GooglePayB } from './components/googlePay';
import { TypeWriter } from './components/TypeWriter';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './styles/index.scss'

export const App: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [typingText, setTypingText] = useState('Hello, please select the horoscope sign');

  const apiUrl = 'http://185.70.185.9:3011';

  function hanldeClick() {
    setIsPressed(state => !state);
  }

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
          <TypeWriter
            text={typingText}
            delay={60}
          />
        </div>

        <div className='has-text-centered'>

          <SwitchTransition mode="out-in">
            <CSSTransition
              key={isPressed as any}
              timeout={500}
              classNames='fade'
            >
              <button
                style={{
                  width: 240,
                  height: 40,
                }}
                className='button is-primary'
                onClick={hanldeClick}
              >
                {!isPressed ? 'Ask my future' : <GooglePayB />}

              </button>

            </CSSTransition>
          </SwitchTransition>

        </div>

      </div>
    </div>
  );
}

export default App;
