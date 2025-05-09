import {useEffect, useState} from "react";

const checkInterval = 50;

export default function QuestionTimer({timeout, onTimeout}) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    console.log("new timeout");
    const progressInterval = setInterval(() => {
      setRemainingTime(prevRemaining => prevRemaining - checkInterval);
    }, checkInterval);
    return () => {
      console.log("clear interval");
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    console.log("set timeout");
    const progressTimeout = setTimeout(onTimeout, timeout);
    return () => {
      console.log("clear timeout");
      clearTimeout(progressTimeout);
    };
  }, [timeout, onTimeout]);

  return (
    <progress id="question-time" max={timeout} value={remainingTime} />
  )
}