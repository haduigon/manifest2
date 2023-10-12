import { useContext, useState } from "react";
import { StateContext } from "./AppContext";
import { ACTIONS } from "./utils";

export const Select: React.FC = () => {

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

  // const [trigger, setTrigger] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const { dispatch } = useContext(StateContext);

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectValue(event.target.value);
    // dispatch({ type: ACTIONS.SET_TYPING_TEXT, payload: 'You choose : ' });
    dispatch({ type: ACTIONS.SET_HORO_SIGN, payload: event.target.value });
  }

  return (
    <div>
      <div
        className="select mt-2"
        // style={{
        //   visibility: (
        //     trigger
        //   ) ? 'visible' : 'hidden',
        // }}
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
  )
}