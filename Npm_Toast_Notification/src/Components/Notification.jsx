import React, { useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai';
import './Notification.css';

const Notification = ({ type = "info", message, onClose = () => {} }) => {
  const [isVisible, setIsVisible] = useState(true);

  const icons = {
    info: <AiOutlineInfoCircle size={"2vw"} />,
    success: <AiOutlineCheckCircle size={"2vw"} />,
    warning: <AiOutlineWarning size={"2vw"} />,
    error: <AiOutlineCloseCircle size={"2vw"} />
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose(); // Call onClose immediately to remove notification
  };

  return (
    isVisible && (
      <div className={`Notification ${type}`}>
        {icons[type]}
        <h2>{message}</h2>
        <AiOutlineClose className='closeBtn' size={"2vw"} onClick={handleClose} />
      </div>
    )
  );
};

export default Notification;
