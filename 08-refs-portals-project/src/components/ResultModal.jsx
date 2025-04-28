import {forwardRef, useImperativeHandle, useRef} from 'react';

function ResultModal({ref, result, targetTime}) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>The target time was <strong>{targetTime} seconds</strong>.</p>
      <p>You stopped the timer <strong>with X seconds left</strong>.</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}

// In React 19, forwardRef is no longer necessary. Pass ref as a prop instead.
const OlderResultModal = forwardRef(({result, targetTime}, ref) => {
  const dialog = useRef(undefined);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  }, []);
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>The target time was <strong>{targetTime} seconds</strong>.</p>
      <p>You stopped the timer <strong>with X seconds left</strong>.</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default OlderResultModal;