import * as React from 'react';
import { Checkbox, useCheckboxState, Radio, Switch, useRadioState } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { useState } from 'react';
import { GiSwordwoman, GiSwordman } from "react-icons/gi";
import './checkbox.scss';
import { useSearchParams } from 'react-router-dom';

type Props = {
    onChange: (event: string) => void,
    text?: string,
    text2?: string,
    text3?: string,
}

export const CheckboxSex: React.FC<Props> = ({ onChange, text }) => {

    const [radioState, _setRadioState] = useState('');
    const [searchParams, _setSearchParams] = useSearchParams();

    console.log(radioState);

    return (
        <div>
            <div className='center'>
                <div className='custom-font mb-10'>{text}</div>
               <div className='choose-box'>

                    <div className='check-box-row'>
                      <GiSwordwoman className='size-25'/>
                    
                    <Radio 
                      name="a" 
                      onChange={() => onChange('female')} className='custom-font'
                      >
                        Female
                    </Radio>
                    </div>

                    <div className='check-box-row'>
                    <GiSwordman className='size-25'/>
                    
                    <Radio 
                      name="a" 
                      onChange={() => onChange('male')}
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
export const CheckboxCelebs: React.FC<Props> = ({ text, text2, text3 }) => {

    // const [radioState, _setRadioState] = useState('');
    // const [searchParams, _setSearchParams] = useSearchParams();

    // console.log(radioState);

    return (
        <div>
            <div className='center' style={{width: "300"}}>
                <div className='custom-font mb-10'>dglkvngbnfj</div>
               <div className='choose-box'>

                    <div className='check-box-row' style={{width: "300px"}}>
                      {/* <GiSwordwoman className='size-25'/> */}
                      
                    <Radio 
                      name="a" 
                       className='custom-font'
                      
                      >
                        
                    </Radio>
                    <div style={{width: "210px"}}>{text}</div>
                    </div>

                    <div className='check-box-row' style={{width: "300px"}}>
                    {/* <GiSwordman className='size-25'/> */}
                    
                    <Radio 
                      name="a" 
                      className='custom-font'
                    >
                        
                    </Radio>
                    <div style={{width: "210px"}}>{text2}</div>
                </div>

                    <div className='check-box-row' style={{width: "300px"}}>
                    {/* <GiSwordman className='size-25'/> */}
                    
                    <Radio 
                      name="a" 
                      className='custom-font'
                    >
                        
                    </Radio>
                    <div style={{width: "210px"}}>{text3}</div>
                </div>

                </div>
               
            </div>
        </div>
    )
}
