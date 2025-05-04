import {forwardRef, useRef, useImperativeHandle} from "react";
import { createPortal} from "react-dom";
import Button from "./Button.jsx";

const Modal = forwardRef(function ({children, buttonCaption}, ref) {
  const dialog = useRef(undefined);
  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  return createPortal((
    <dialog ref={dialog} className={`backdrop:bg-stone-900/90 p-4 rounded-md shadow-md`}>
      {children}
      <form method="dialog" className={`mt-4 text-right`}>
        <Button customClass="bg-stone-800 text-stone-50 hover:bg-stone-950">{buttonCaption}</Button>
      </form>
    </dialog>
  ), document.getElementById('modal-root'));
});

export default Modal;