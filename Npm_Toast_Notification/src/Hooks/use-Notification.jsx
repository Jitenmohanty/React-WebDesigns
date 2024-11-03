import { useCallback, useState } from "react";
import Notification from "../Components/Notification";

const useNotification = (position = "top-left") => {
  const [notification, setNotification] = useState(null);
  let timer;

  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timer); // Clear any existing timer
    setNotification(notificationProps);
    timer = setTimeout(() => {
      setNotification(null); // Clear notification after duration
    }, notificationProps.duration);
  }, []);

  const handleClose = () => {
    clearTimeout(timer); // Clear the timer to prevent delayed close
    setNotification(null); // Immediately remove notification
  };

  const NotificationComponent = notification ? (
    <div className={`${position} Noti`}>
      <Notification {...notification} onClose={handleClose} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
