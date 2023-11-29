import classNames from "classnames"
import { useContext, useEffect, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { StateContext } from "../components/AppContext";
import axios from "axios";
import { ACTIONS } from "../helpers/utils";
import { TypeWriter } from "../components/TypeWriter";
import { LocalSelect } from "../components/select/SelectDateOfBirth";
import { GooglePayB } from "../components/googlePay";
import { useSearchParams } from 'react-router-dom';
import DotLoader from 'react-spinners/DotLoader';
import { CheckboxLocal } from '../components/checkbox/CheckboxLocal';

export const HoroPage: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);
  const { state, dispatch } = useContext(StateContext);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams, 'searchParams');

  const apiUrl = 'http://185.70.185.9:3011';

  const client = axios.create({
    baseURL: apiUrl,
  });
// my-4 mx-6 add this classes if screen is bigger 600px
  useEffect(() => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth, 'screen');
    
  }, []);

  let typingText = state.typingText;

  function hanldeClick() {
    setSearchParams(`?sign=${state.horoSign}`);

    setIsPressed(state => !state);
    dispatch({ type: ACTIONS.SET_TYPING_TEXT, payload: '' });
    client.post('/chat', {
      prompt: `write me a horoscope for ${state.horoSign} for a week.length of response should be 400 words`
    }).then((resp: any) => {
      console.log(resp.data.message);
      dispatch({ type: ACTIONS.SET_TYPING_TEXT, payload: '' });
      dispatch({ type: ACTIONS.SET_TYPING_TEXT, payload: resp.data.message });
    });
  }
  console.log(state.typingText, 'tt');
  console.log(typingText.split(' '), 'tt2');
  return (
    <div className={classNames('box has-text-centered', {
      'has-text-centered': !isPressed,
    })}>
      <div className='box'>
        {state.typingText.length > 0 ? (
          <TypeWriter
            text={state.typingText}
            delay={60}
          />
        ) : (
          <div className="center-div">
            <DotLoader color="#36d7b7" />
          </div>


        )}
        <LocalSelect />

        <CheckboxLocal />

      </div>
      <div className="has-text-centered" >
      </div>

      <div className='has-text-centered' style={{ height: '100px' }}>

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
  )
}