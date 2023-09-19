import React, { useState, useEffect } from "react";

type Props = {
  text: string,
  delay: number,
};

 export const TypeWriter: React.FC<Props> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectValue(event.target.value);
  }

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } setTrigger(true);
  }, [currentIndex, delay, text]);

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
            <option>Aries</option>
            <option>Taurus</option>
            <option>Gemini</option>
            <option>Cancer</option>
            <option>Leo</option>
            <option>Virgo</option>
            <option>Libra</option>
            <option>Scorpio</option>
            <option>Sagittarius</option>
            <option>Capricorn</option>
            <option>Aquarius</option>
            <option>Pisces</option>
          </select>
        </div>
      </div>
    </>
  )
};