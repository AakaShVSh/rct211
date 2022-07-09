import { useEffect, useRef, useState } from 'react'

const useTimer = () => {
  const [time,settime] = useState(1);
  const timerId = useRef(null);

  const [count, setcount] = useState(0);

  const start = () => {
    if(!timerId.current){
        let id = setInterval(() => {
            setcount((prev) => {
                return prev + 1;
            });
        }, 15);
        timerId.current = id;
    }
  }
  
  const pause = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  }

  const restart = () => {
    clearInterval(timerId.current);
    setcount(0);
    timerId.current = null;
  }

  useEffect(() => {
    function secondsToTime(secs) {
      var hours = Math.floor(secs / (60 * 60));
      var bag = hours + "m";
      var divisor_for_minutes = secs % (60 * 60);
      var minutes = Math.floor(divisor_for_minutes / 60);
      var divisor_for_seconds = divisor_for_minutes % 60;
      var seconds = Math.ceil(divisor_for_seconds);
      if (hours === 0) {
        bag = "";
      }
      settime(bag + " " +minutes + "s "+ seconds);
    }
    secondsToTime(count);
  }, [count]);

  return {
    time,start,pause,restart
  }

}

export default useTimer
