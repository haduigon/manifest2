import React, { useState, useEffect} from "react";

type Props = {
  text: string,
  delay: number,
}

export const TypeWriter: React.FC<Props> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } setTrigger(true);
  }, [currentIndex, delay, text]);
  console.log(trigger);
  

  return (
    <span>{currentText}</span>
  )
}