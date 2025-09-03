import styles from './modal.module.css';
import {createPortal} from "react-dom";
import {useEffect, useRef} from "react";
function Modal({children, onModalClose}) {
  const dialog = useRef();
  // Using useEffect to sync the Modal component with the DOM Dialog API
  // This code will open the native <dialog> via it's built-in API whenever the <Modal> component is rendered
  // useEffect(() => {
  //   const modal = dialog.current;
  //   modal.showModal();
  //   return () => {
  //     modal.close();
  //   };
  // }, []);

  return createPortal(
    (
      <>
        <div className={styles.backdrop} onClick={onModalClose} />
        {/*<dialog ref={dialog} className={styles.modal} onClose={onModalClose}>*/}
        <dialog ref={dialog} className={styles.modal} open>
          {children}
        </dialog>
      </>
    ),
    document.getElementById("modal")
  );
}

export default Modal;