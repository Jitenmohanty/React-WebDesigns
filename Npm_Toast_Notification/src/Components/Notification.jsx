import React from 'react'
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai';
import './Notification.css'

const Notification = ({type="info",message,onClose=()=>{}}) => {
    
    const icons = {
        info:<AiOutlineInfoCircle  size={"2vw"}/>,
        success:<AiOutlineCheckCircle  size={"2vw"}/>,
        warning:<AiOutlineWarning  size={"2vw"}/>,
        error:<AiOutlineCloseCircle  size={"2vw"}/>
    }

  return (
    <div className={`Notification ${type}`}>
        {icons[type]}
        <h1>{message}</h1>
        <AiOutlineClose className='closeBtn' size={"2vw"} onClick={()=>onClose()}/>
    </div>
  )
}

export default Notification
