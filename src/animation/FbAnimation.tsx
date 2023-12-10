import { useEffect, useRef } from "react";
import "./fbstyles.scss";

type Props = {
  text: string
}

export const FbAnimation: React.FC<Props> = ({ text }) => {
  return (
    <div id="wave">
      <span className="srtextarea"></span>
      <span className="srfriendzone custom-font">
          {text}
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
  // const screenBottom = window
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize);
  
  useEffect(() => {
    if (myRef.current) {
      console.log(myRef.current.offsetTop + myRef.current.offsetHeight, '222');
      myRef.current.scrollIntoView();
    }  
  }, [])

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