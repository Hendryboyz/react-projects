import {forwardRef, useImperativeHandle, useRef} from 'react';
import {createPortal} from 'react-dom';

function ResultModal({ref, targetTime, remainingTime, onRestart}) {
  const isUserLost = remainingTime <= 0;
  return (
    <dialog ref={ref} className="result-modal">
      {isUserLost && <h2>You Lost!</h2>}
      <p>The target time was <strong>{targetTime} seconds</strong>.</p>
      <p>You stopped the timer <strong>with X seconds left</strong>.</p>
      <form method="dialog" onSubmit={onRestart}>
        <button>Close</button>
      </form>
    </dialog>
  );
}

// In React 19, forwardRef is no longer necessary. Pass ref as a prop instead.
const OlderResultModal = forwardRef(({targetTimeSecs, remainingTime, onRestart}, ref) => {
  const dialog = useRef(undefined);
  const isUserLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  }, []);

  const score = Math.round((1 - remainingTime / (targetTimeSecs * 1000)) * 100);
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onRestart}>
      {isUserLost && <h2>You Lost</h2>}
      {!isUserLost && <h2>You success, score: {score}</h2>}
      <p>The target time was <strong>{targetTimeSecs} seconds</strong>.</p>
      <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong>.</p>
      <form method="dialog" onSubmit={onRestart}>
        <button>Close</button>
      </form>
    </dialog>
  , document.getElementById("modal"));
});

export default OlderResultModal;