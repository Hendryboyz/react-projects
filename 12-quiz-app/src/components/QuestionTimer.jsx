import {useEffect, useState} from "react";

const checkInterval = 50;

export default function QuestionTimer({timeout, onTimeout, mode}) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setRemainingTime(prevRemaining => prevRemaining - checkInterval);
    }, checkInterval);
    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    const progressTimeout = setTimeout(() => {
      if (onTimeout) {
        onTimeout();
      }
    }, timeout);
    return () => {
      clearTimeout(progressTimeout);
    };
  }, [timeout, onTimeout]);

  return (
    <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
  )
}