import {useEffect, useState} from "react";

const checkIntervalMilliseconds = 10;

export default function ProgressBar({timeoutMilliseconds, callback}) {
  const [remainingTime, setRemainingTime] = useState(timeoutMilliseconds);
  useEffect(() => {
    const deleteInterval = setInterval(() => {
      if (checkIntervalMilliseconds <= 0) {
        callback();
      }
      setRemainingTime(prevRemaining => prevRemaining - checkIntervalMilliseconds);
    }, checkIntervalMilliseconds);

    return () => {
      clearInterval(deleteInterval);
    };
  }, [callback]);
  return (<progress value={remainingTime} max={timeoutMilliseconds}/>)
}