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
      myRef.current.scrollIntoView();
    }
  }, []);
  return (
    <div className='message-block'>
      <div className='icon'></div>
      <div id="wave">
        <span className="srtextarea"></span>
        <span className="srfriendzone custom-font">
          Space AI is typing
        </span>
        <span className="dot one"></span>
        <span className="dot two"></span>
        <span className="dot three"></span>
        <p className="">
        </p>
        <div ref={myRef}></div>
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
      myRef.current.scrollIntoView();
    }
  }, []);

  return (
    <>
      <div className='message-block'>
        <div className='icon mt100'></div>
        <div id="wave" >
          <span className="srtextarea"></span>
          <span className="srfriendzone custom-font">
            {text}
          </span>
          <p className="">

          </p>


        </div>
        {/* <div className='icon'></div> */}
      </div>
      <div ref={myRef}></div>
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
        myRef.current?.scrollIntoView();
      }, 4750);
    }
  }, []);

  return (
    <div className='message-block'>
      {/* <div className='icon'></div> */}
      <div>
        {showTyping && <FbAnimation />} {showMessage && <FbMessage text={text} />}
        <div style={{ marginLeft: '65px' }}>
          {showChild && child}
        </div>
        <div ref={myRef} className="mb-10"></div>
      </div>
    </div>
  )
}
