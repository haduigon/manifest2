import classNames from "classnames"
import { useContext, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { StateContext } from "./AppContext";
import axios from "axios";
import { ACTIONS } from "./utils";
import { TypeWriter } from "./TypeWriter";
import { Select } from "./Select";
import { GooglePayB } from "./googlePay";
import { useSearchParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader'

export const HoroPage: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);
  // const [typingText, setTypingText] = useState('Hello, please select the horoscope sign');
  // const [horoSign, setHoroSign] = useState('');
  const { state, dispatch } = useContext(StateContext);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams, 'searchParams');


  const apiUrl = 'http://185.70.185.9:3011';

  const client = axios.create({
    baseURL: apiUrl,
  });

  let typingText = state.typingText;

  function hanldeClick() {
    // const params = new URLSearchParams(searchParams);
    // params.append('sign', state.horoSign);
    setSearchParams('?sign=', state.horoSign as any);

    setIsPressed(state => !state);
    dispatch({ type: ACTIONS.SET_TYPING_TEXT, payload: '' });
    client.post('/chat', {
      prompt: `write me a horoscope for ${state.horoSign} for a week length of message should be 200 words`
    }).then((resp: any) => {
      console.log(resp.data.message);
      dispatch({ type: ACTIONS.SET_TYPING_TEXT, payload: '' });
      dispatch({ type: ACTIONS.SET_TYPING_TEXT, payload: resp.data.message });
    });
  }
  console.log(state.typingText, 'tt');
  console.log(typingText, 'tt2');
  return (
    <div className={classNames('box has-text-centered', {
      'has-text-centered': !isPressed,
    })}>
      <div className='box my-4 mx-6'>
        {state.typingText.length > 0 ? (
          <TypeWriter
            text={state.typingText}
            delay={60}
          />
        ) : (
          <ClipLoader color="#36d7b7" />

        )}
        <Select />
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