import * as React from 'react';
import { Checkbox, useCheckboxState, Radio, Switch, useRadioState } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { useState } from 'react';

export const CheckboxLocal: React.FC = () => {

  const checkbox = useCheckboxState() as any;
  const checkbox2 = useCheckboxState() as any;

  const radio = useRadioState() as any;
  const radio2 = useRadioState() as any;
  const radio3 = useRadioState() as any;
  const [radioState, setRadioState] = useState('');

  // console.log(checkbox.state, 'checkbox');
  
    const onSubmit = React.useCallback(
        (e: any) => {
            e.preventDefault();

            if (!checkbox.state) {
                // update the state manually from the `confirm` result
                checkbox.setState(window.confirm('Do you agree to the terms and conditions?'));
            }
        },
        [checkbox]
    );
        console.log(radioState);
        
  return (
    <div>
      <form onSubmit={onSubmit}>
            <Checkbox {...checkbox}>
                Do you agree to the terms and conditions?
            </Checkbox>
            <Checkbox {...checkbox2}>
                Do you agree to the terms and conditions!!!!?
            </Checkbox>
            
        </form>

        <div>
        
            <Radio name="a"   onChange={() => setRadioState('1')}>Don't make it bad</Radio>
            <Radio name="a"  onChange={() => setRadioState('2')
            }>Don't make it bad</Radio>
            <Radio name="a"  onChange={() => setRadioState('3')
            }>Don't make it bad</Radio>
        
        </div>
    </div>
  )
}
