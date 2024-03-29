import { ReactNode, useEffect, useRef, useState } from "react";
import "./fbstyles.scss";

type Props = {
  text: string | ReactNode,
  child?: ReactNode
}

export const FbAnimation: React.FC = () => {
  const myRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div className='message-block'>
      <div className='icon'></div>
      <div id="wave">
        <span className="srtextarea"></span>
        <span className="srfriendzone custom-font" ref={myRef}>
          Space AI is typing
        </span>
        <span className="dot one"></span>
        <span className="dot two"></span>
        <span className="dot three"></span>
        <p className="">
        </p>
        
      </div>
      
    </div>
  )
}

export const FbMessage: React.FC<Props> = ({ text, child }) => {
  const myRef = useRef<null | HTMLDivElement>(null);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <div className='message-block'>
        <div className='icon mt100'></div>
        <div id="wave" >
          <span className="srtextarea"></span>
          <span className="srfriendzone custom-font" ref={myRef}>
            {text}
          </span>
          <p className="">
          </p>
        </div>        
      </div>
      <div style={{ marginLeft: '65px' }}>{child}</div>      
    </>
  )
}

export const FbAll: React.FC<Props> = ({ text, child }) => {

  const [showTyping, setShowTyping] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showChild, setShowChild] = useState(false);
  const myRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setShowTyping(true);
    }, 1000)
    setTimeout(() => {
      setShowTyping(false);
    }, 4000)
    setTimeout(() => {
      setShowMessage(true);
    }, 4500);
    if (child) {
      setTimeout(() => {
        setShowChild(true);
      }, 4650);
    }

    if (myRef.current) {
      setTimeout(() => {
        myRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 4850);
    }
  }, []);

  return (
    <div className='message-block'>
      <div >
        {showTyping && <FbAnimation />} {showMessage && <FbMessage text={text} />}
        <div style={{ marginLeft: '65px' }} ref={myRef} className="mb-10">
          {showChild && child}
        </div>
        
      </div>
      
    </div>
  )
}
