import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "./AppContext";
import { ACTIONS } from "./utils";

type Props = {
  text: string,
  delay: number,
};

 export const TypeWriter: React.FC<Props> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const { state, dispatch } = useContext(StateContext);

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectValue(event.target.value);
    dispatch({ type: ACTIONS.SET_HORO_SIGN, payload: event.target.value })
  }

  console.log(selectValue);
  
  const horoSigns = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces',
  ];

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } setTrigger(true);
  }, [currentIndex, delay, text]);
  console.log(state.horoSign);
  

  return (
    <>
      <span>{currentText}</span>
      <div>
        <div
          className="select mt-2"
          style={{
            visibility: (
              trigger
            ) ? 'visible' : 'hidden',
          }}
        >
          <select
            value={selectValue}
            onChange={(event) => handleSelect(event)}
          >
            <option>Select your sign</option>
            {horoSigns.map(sign => {
              return (
                <option key={sign} value={sign}>{sign}</option>
              )
            })}
          </select>
        </div>
      </div>
    </>
  )
};