import { ReactNode, useEffect, useRef, useState } from "react";
import "./fbstyles.scss";

type Props = {
  text: string,
  child?: ReactNode
}

export const FbAnimation: React.FC = () => {
  return (
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
    </div>
  )
}

export const FbMessage: React.FC<Props> = ({ text }) => {
  const myRef = useRef<null | HTMLDivElement>(null);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.scrollIntoView();
    }
  }, []);

  return (
    <div id="wave" >
      <span className="srtextarea"></span>
      <span className="srfriendzone custom-font">
        {text}
      </span>
      <p className="">

      </p>
      <div ref={myRef}></div>
    </div>
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
      }, 4600); 
    }

    if (myRef.current) {
      setTimeout(() => {
        myRef.current?.scrollIntoView();
      }, 4650);
    }
  },[]);

  return (
    <div>
      {showTyping && <FbAnimation />} {showMessage && <FbMessage text={text} />}
      {showChild && child}
      <div ref={myRef}></div>
    </div>
  )
}
