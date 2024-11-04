import React, { useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai';
import './Notification.css';

const Notification = ({ type = "info", message, onClose = () => {},comeFrom="left" }) => {
  const [isVisible, setIsVisible] = useState(true);

  
  const icons = {
    info: <AiOutlineInfoCircle size={"2vw"} />,
    success: <AiOutlineCheckCircle size={"2vw"} />,
    warning: <AiOutlineWarning size={"2vw"} />,
    error: <AiOutlineCloseCircle size={"2vw"} />
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 500); // Trigger onClose after animation duration
  };

  return (
    isVisible && (
      <div className={`Notification ${comeFrom} ${type} ${!isVisible ? 'exit' : ''}`}>
        {icons[type]}
        <h2>{message}</h2>
        <AiOutlineClose className='closeBtn' size={"2vw"} onClick={handleClose} />
      </div>
    )
  );
};

export default Notification;
