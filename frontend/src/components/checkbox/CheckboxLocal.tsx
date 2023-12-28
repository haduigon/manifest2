import * as React from 'react';
import { Checkbox, useCheckboxState, Radio, Switch, useRadioState } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { useState } from 'react';
import { GiSwordwoman, GiSwordman } from "react-icons/gi";
import './checkbox.scss';
import { useSearchParams } from 'react-router-dom';

type Props = {
    onChange: (event: string) => void,
}

export const CheckboxLocal: React.FC<Props> = ({ onChange }) => {

    const checkbox = useCheckboxState() as any;
    const [radioState, setRadioState] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const inputName: string = searchParams.get('name') || '';

    const onSubmit = React.useCallback(
        (e: any) => {
            e.preventDefault();

            if (!checkbox.state) {

                checkbox.setState(window.confirm('Do you agree to the terms and conditions?'));
            }
        },
        [checkbox]
    );
    console.log(radioState);

    return (
        <div>
            <div className='center'>
                <div className='custom-font mb-10'>Choose your sex, {inputName}</div>
               <div className='choose-box'>

                    <div className='check-box-row'>
                      <GiSwordwoman className='size-25'/>
                    
                    <Radio 
                      name="a" 
                      onChange={() => onChange('f')} className='custom-font'
                      >
                        Female
                    </Radio>
                    </div>

                    <div className='check-box-row'>
                    <GiSwordman className='size-25'/>
                    
                    <Radio 
                      name="a" 
                      onChange={() => onChange('m')}
                      className='custom-font'
                    >
                        Male
                    </Radio>
                </div>

                </div>
               
            </div>
        </div>
    )
}
