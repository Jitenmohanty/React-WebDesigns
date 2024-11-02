import React from 'react'
import Notification from './Components/Notification'


const App = () => {

  const handleClose = () => {
    const closeDivs = document.getElementsByClassName("close");
    for (let i = 0; i < closeDivs.length; i++) {
        closeDivs[i].style.display = "none";
    }
    console.log(closeDivs);
};

  return (
    <div>
       <h1> Welcome to Jitu Developement enviorment</h1>
       <div className='close'> <Notification type='warning' message="It's success" onClose={handleClose}/></div>
    </div>
  )
}

export default App
