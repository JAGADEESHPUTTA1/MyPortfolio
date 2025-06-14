import React from "react";
import './Modal.scss'

const Modal = ({title, body, onClose}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        {body}
      </div>
    </div>
  );
};

export default Modal;
