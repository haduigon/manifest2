import '../fbChatLp/fbChatStyles.scss';
import { FbAnimation, FbMessage } from '../../animation/FbAnimation';
import { useEffect, useState } from 'react';
import { LocalInput } from "../../components/inputs/Input"

export const FbChatLanding: React.FC = () => {
  const [showTyping, setShowTyping] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  function showTree(trigger: (value: boolean) => void, trigger2: (value: boolean) => void) {
    setTimeout(() => {
      trigger(true);
    }, 1000)
    setTimeout(() => {
      trigger(false)
    }, 4000)
    setTimeout(() => {
      trigger2(true)
    }, 4500)
  }


  useEffect(() => {
    showTree(setShowTyping, setShowMessage);
  }, [])
  return (
    <div className='message-block'>
      <div className='icon'></div>
      {showTyping && <FbAnimation text='text text' />} {
        showMessage &&
        <div className="">
          <FbMessage text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, consequatur tempore consequuntur quaerat doloribus cupiditate debitis exercitationem eos culpa, dolores et quam necessitatibus quibusdam repellat voluptate at, voluptatum eum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, consequatur tempore consequuntur quaerat doloribus cupiditate debitis exercitationem eos culpa, dolores et quam necessitatibus quibusdam repellat voluptate at, voluptatum eum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, consequatur tempore consequuntur quaerat doloribus cupiditate debitis exercitationem eos culpa, dolores et quam necessitatibus quibusdam repellat voluptate at, voluptatum eum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, consequatur tempore consequuntur quaerat doloribus cupiditate debitis exercitationem eos culpa, dolores et quam necessitatibus quibusdam repellat voluptate at, voluptatum eum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, consequatur tempore consequuntur quaerat doloribus cupiditate debitis exercitationem eos culpa, dolores et quam necessitatibus quibusdam repellat voluptate at, voluptatum eum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis, consequatur tempore consequuntur quaerat doloribus cupiditate debitis exercitationem eos culpa, dolores et quam necessitatibus quibusdam repellat voluptate at, voluptatum eum!'
          /> <LocalInput />
        </div>
      }
    </div>
  )
}
