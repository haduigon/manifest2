import '../fbChatLp/fbChatStyles.scss';
import { FbAll } from './animation/FbAnimation';
import { useState } from 'react';
import { LocalInput } from "../../components/inputs/Input";
import { useSearchParams } from 'react-router-dom';
import { LocalSelect } from '../../components/select/SelectDateOfBirth';

export const FbChatLanding: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const inputName: string = searchParams.get('name') || '';
  const [step2, setStep2] = useState(false);

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) {
      params.delete('name');
    } else {
      params.set('name', event.target.value);
    }

    setSearchParams(params);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {

    if (event.key === 'Enter' && inputName.replace(/\s/g, '').length > 0) {
      console.log('ok');
      setStep2(true);
    }
  }

  return (
    <div className="dialog">
      <div className='message-block'>
        <div className='icon'></div>

        <FbAll 
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, consequatur tempore consequuntur quaerat doloribus cupiditate debitis exercitationem eos culpa, dolores et quam necessitatibus quibusdam repellat voluptate at, voluptatum eum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, consequatur tempore consequuntur quaerat doloribus cupiditate debitis exercitationem eos culpa, dolores et quam necessitatibus quibusdam repellat voluptate at, voluptatum eum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, consequatur tempore consequuntur quaerat doloribus cupiditate debitis exercitationem eos culpa, dolores et quam necessitatibus quibusdam repellat voluptate at, voluptatum eum!' 
          child={<LocalInput
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            inputErrorText='Please, input your name'
            field='name'
          />}  
        />
      </div>
      {step2 &&
        <div className='message-block'>
        <div className='icon'></div>

        <FbAll 
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, consequatur tempore consequuntur quaerat doloribus cupiditate debitis exercitationem eos culpa, dolores et quam necessitatibus quibusdam repellat voluptate at, voluptatum eum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, consequatur tempore consequuntur quaerat doloribus cupiditate debitis exercitationem eos culpa, dolores et quam necessitatibus quibusdam repellat voluptate at, voluptatum eum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, consequatur tempore consequuntur quaerat doloribus cupiditate debitis exercitationem eos culpa, dolores et quam necessitatibus quibusdam repellat voluptate at, voluptatum eum!' 
          child={
            <LocalSelect />
          }  
        />
      </div>
      }
    </div>
  )
}
