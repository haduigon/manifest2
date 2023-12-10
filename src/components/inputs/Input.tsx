import '../inputs/localInput.scss';
import { useSearchParams } from 'react-router-dom';

export const LocalInput: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const inputValue = searchParams.get('name') || '';

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      params.delete('name');
    } else {
      params.set('name', e.target.value);
    }

    setSearchParams(params);
  }
  return (
    <div className='input-container'>
      <div className='input-box'>
        <input
          value={inputValue}
          className="input is-link custom-font input-box" 
          type="text" 
          placeholder="Input your name" 
          onChange={(e) => handleInput(e)}
        />
      </div>
    </div>
  )
}
