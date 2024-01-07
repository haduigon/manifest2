import '../fbChatLp/fbChatStyles.scss';
import { FbAll, FbAnimation, FbMessage } from './animation/FbAnimation';
import { useEffect, useState } from 'react';
import { LocalInput } from "../../components/inputs/Input";
import { useSearchParams } from 'react-router-dom';
import { LocalSelect } from '../../components/select/SelectDateOfBirth';
// import { Stripe } from '../payments/Stripe';
import { CheckboxTwin, CheckboxCelebs } from '../../components/checkbox/CheckboxLocal';
import { LocalSelect2 } from '../../components/select/SelectDateOfBirth2';
import { SingleValue } from "react-select";
import axios from 'axios';
import { GiSwordwoman, GiSwordman } from "react-icons/gi";

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
  const [choosenCeleb, setChoosenCeleb] = useState('0');
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
        prompt: `write me three female celebreties who were born exectly ${day} ${month} and have the children after 1991 year`
      }).then((response: any) => {
        console.log(response.data.message.split('\n\n'), 'resp data');
        setCelebs(response.data.message.split('\n\n'));
      }).finally(() => {
        setIsLoadong(false)
      })
    }
  }, [isBithdateSet])

  console.log(choosenCeleb, 'celebs state');
  
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

  if (celebs.length) {
    const defice = celebs[1].indexOf('-');
  const celebName = celebs[1].slice(3, defice);
  console.log(celebName, 'name');
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
            <CheckboxTwin 
              onChange={setRadioState}
              text={`${inputName}, select your sex`} 
              icon1={<GiSwordwoman className='size-25'/>} 
              icon2={<GiSwordman className='size-25'/>}
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
            text="This day were born next wemen, please choose whom do you assosiate yourself with more"
            child={
              <CheckboxCelebs
                text2={celebs[2]}
                text3={celebs[3]}
                text={celebs[1]}
                onChange={setChoosenCeleb}
                />
            }
             />
        )}

        {choosenCeleb !== '0' && (
          <FbAll
            text='Are you married?'
            child={
              <CheckboxTwin 
                text='please, choose' 
                onChange={() => {}}
              />
            }
          />
        )}
    </div>
  )
}
