import styles from './modal.module.css';
import {createPortal} from "react-dom";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
function Modal({children}) {
  const dialog = useRef();
  const navigate = useNavigate();
  // Using useEffect to sync the Modal component with the DOM Dialog API
  // This code will open the native <dialog> via it's built-in API whenever the <Modal> component is rendered
  // useEffect(() => {
  //   const modal = dialog.current;
  //   modal.showModal();
  //   return () => {
  //     modal.close();
  //   };
  // }, []);

  function closeHandler() {
    navigate('/');
  }

  return createPortal(
    (
      <>
        <div className={styles.backdrop} onClick={closeHandler} />
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