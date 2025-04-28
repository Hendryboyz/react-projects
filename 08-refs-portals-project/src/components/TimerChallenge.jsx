import {useState, useRef} from "react";

export default function TimerChallenge({title, targetTime, ...props}) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  let timer = useRef(undefined);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true)
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    // setTimerStarted(false);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's': ''}
      </p>
      <p>
        <button onClick={timer.current ? handleStop : handleStart}>
          {timer.current ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
}