import { useEffect, useRef } from "react";

function PopupModal({ openModal, closeModal, children, position, componentRef }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (openModal) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [openModal]);

  const handleOutsideClick = (e) => {
    if (componentRef.current && !componentRef.current.contains(e.target)) {
      dialogRef.current?.close();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });

  return (
    <dialog ref={dialogRef}>
      <div>{children}</div>
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
}

export default PopupModal;
