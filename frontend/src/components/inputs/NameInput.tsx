import { useState } from 'react';
import './NameInput.scss';
import { useSearchParams } from 'react-router-dom';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  inputErrorText: string,
  field: string
}

export const NameInput: React.FC<Props> = ({
  onChange, 
  onKeyDown, 
  inputErrorText, 
  field,
}) => {
 const [searchParams, setSearchParams] = useSearchParams();
 const inputValue: string = searchParams.get(field) || '';

 return (
   
   <div className='input-container'>
     <div className='input-box'>
       <input
         value={inputValue}
         className="input is-link custom-font input-box" 
         type="text" 
         placeholder="Jhon Smith" 
         onChange={(event) => onChange(event)}
         autoFocus
         onKeyDown={(event) => onKeyDown(event)}
       />
     </div>
     {inputValue.trim().length === 0 && <div>{inputErrorText}</div>}
   </div>
 )
}
