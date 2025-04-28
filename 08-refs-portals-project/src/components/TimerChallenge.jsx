import {useState, useRef} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime, ...props}) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const timer = useRef(undefined);
  const dialog = useRef(undefined);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    // setTimerStarted(false);
  };

  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
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
    </>
  );
}