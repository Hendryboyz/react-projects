import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";

export default function Modal({children, open, onClose, className = ''}) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      // `open` props in dialog can not show the backdrop in the background
      // only invoke `showModal()` can
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);
  return createPortal((
    <dialog
      ref={dialog}
      className={`modal ${className}`}
      onClose={onClose}
    >
      {open && children}
    </dialog>
  ), document.getElementById("modal"));
}