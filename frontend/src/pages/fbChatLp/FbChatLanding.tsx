import '../fbChatLp/fbChatStyles.scss';
import { FbAll, FbAnimation, FbMessage } from './animation/FbAnimation';
import { useEffect, useState } from 'react';
import { LocalInput } from "../../components/inputs/Input";
import { useSearchParams } from 'react-router-dom';
import { LocalSelect } from '../../components/select/SelectDateOfBirth';
// import { Stripe } from '../payments/Stripe';
import { CheckboxSex, CheckboxCelebs } from '../../components/checkbox/CheckboxLocal';
import { LocalSelect2 } from '../../components/select/SelectDateOfBirth2';
import { SingleValue } from "react-select";
import axios from 'axios';

type SelectOption = {
  value: string | number | null,
  label: string | number
}

export const FbChatLanding: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const inputName: string = searchParams.get('name') || '';
  const day: string = searchParams.get('day') || '';
  const month: string = searchParams.get('month') || '';
  const year: string = searchParams.get('year') || '';
  const [step2, setStep2] = useState(false);
  const [radioState, setRadioState] = useState('');
  const [isLoading, setIsLoadong] = useState(false);
  const [celebs, setCelebs] = useState<string[]>([]);
  // const [showEnter, setShowEnter] = useState(false);
  // const stringa = celebs[1]
  const apiUrl = 'https://ro.sms.destiny4you.com';

  const client = axios.create({
    baseURL: apiUrl,
    withCredentials: false,
  })

  const isBithdateSet = (day.length > 0) && (month.length > 0) && (year.length > 0);
  console.log(isBithdateSet, 'data');
  useEffect(() => {
    if (isBithdateSet) {
      setIsLoadong(true);
      client.post('/chat', {
        prompt: `write me three female celebreties who were born exectly ${day} ${month} and have the children after 1990 year`
      }).then((response: any) => {
        // console.log(response.data.message.split('\n\n'), 'resp data');
        setCelebs(response.data.message.split('\n\n'));
      }).finally(() => {
        setIsLoadong(false)
      })
    }
  }, [isBithdateSet])

  console.log(celebs, 'celebs state');
  
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

  function handleSelectParam(value: SingleValue<SelectOption>, param: string) {

    if (value?.value === param) {
      params.delete(param)
    } else {
      params.set(param, String(value?.value));
    }

    setSearchParams(params);

  }

  return (
    <div className="dialog">

        <FbAll 
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis,Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis ' 
          child={<LocalInput
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            inputErrorText='Input your name and'
            field='name'
            showEnter={step2 }
          />}  
        />

      {step2 &&
        <FbAll 
          text={`${inputName}, lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis,`}
          child={
            <CheckboxSex 
              onChange={setRadioState}
              text={`${inputName}, select your sex`}  
            />
          }  
        />}

      {radioState.length > 0 && (
        <FbAll 
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, ' 
          child={<LocalSelect2 onChange={handleSelectParam}/>}  
        />
      )}

      {isLoading && (
        <FbAnimation />
      )}
        {celebs.length > 0 && (
          <FbMessage
            text={celebs[2]}
            child={
              <CheckboxCelebs
                text2={celebs[2]}
                text3={celebs[3]}
                text={celebs[1]}
                onChange={() => {}}
                />
            }
             />
        )}
    </div>
  )
}
