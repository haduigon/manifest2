import { useState } from 'react';
import '../inputs/localInput.scss';
import { useSearchParams } from 'react-router-dom';
// import { KeyboardEvent } from 'react'

export const LocalInput: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const inputValue: string = searchParams.get('name') || '';
  const [error, setError] = useState('');

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) {
      params.delete('name');
      setError('Name can`t be empty');
    } else {
      params.set('name', event.target.value);
    }
    
    setSearchParams(params);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {

    if (event.key === 'Enter' && inputValue.length > 0) {
      console.log('ok');
      
    }
  }
  console.log(inputValue.replace(/\s/g, '').length);
  
  return (
    <div className='input-container'>
      <div className='input-box'>
        <input
          value={inputValue}
          className="input is-link custom-font input-box" 
          type="text" 
          placeholder="Jhon Smith" 
          onChange={(event) => handleInput(event)}
          autoFocus
          onKeyDown={(event) => handleKeyDown(event)}
        />
      </div>
      {inputValue.trim().length === 0 && <>Please, input your name</>}
    </div>
  )
}
