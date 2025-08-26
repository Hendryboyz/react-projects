import { createPortal } from 'react-dom';
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  const hiddenAnimationState = { opacity: 0, y: 30 };
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        initial='hidden'
        variants={{
          hidden: hiddenAnimationState,
          visible: { opacity: 1, y: 0 },
        }}
        animate='visible'
        // disappearance attr that is not supported by vanilla CSS
        exit='hidden'
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
