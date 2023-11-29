import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "./AppContext";
import { ACTIONS } from "../helpers/utils";

type Props = {
  text: string,
  delay: number,
};

 export const TypeWriter: React.FC<Props> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } 
  }, [currentIndex, delay, text]);  

  return (
    <>
      <h2 className="subtitle is-6">{currentText}</h2>
    </>
  )
};