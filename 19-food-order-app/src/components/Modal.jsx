import {useEffect, useRef} from "react";

export default function Modal({children, open, onClose}) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);
  return (
    <dialog ref={dialog} className="modal" onClose={onClose}>
      {open && children}
    </dialog>
  );
}