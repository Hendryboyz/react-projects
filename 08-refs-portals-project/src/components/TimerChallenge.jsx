import {useState, useRef} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime, ...props}) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const isTimerActive = 0 < timeRemaining && timeRemaining < targetTime * 1000;

  const timer = useRef(undefined);
  const dialog = useRef(undefined);

  const handleStart = () => {
    const checkInterval = 10;
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - checkInterval);
    }, checkInterval);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.open();
  };

  const isTimesUp = timeRemaining <= 0;

  if (isTimesUp) {
    handleStop();
  }

  const handleRestart = () => {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTimeSecs={targetTime}
        remainingTime={timeRemaining}
        onRestart={handleRestart}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={isTimerActive ? 'active' : undefined}>
          {isTimerActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}