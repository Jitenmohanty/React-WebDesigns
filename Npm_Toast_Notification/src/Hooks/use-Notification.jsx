import { useCallback, useState, useEffect } from "react";
import Notification from "../Components/Notification";

const useNotification = (position = "bottom",comeFrom="left") => {
  const [notifications, setNotifications] = useState([]);

  // Add a new notification to the stack
  const triggerNotification = useCallback((notificationProps) => {
    setNotifications((prev) => [
      ...prev,
      { ...notificationProps, id: Date.now() }, // Add unique ID
    ]);
  }, []);

  // Automatically remove notifications after the duration
  useEffect(() => {
    if (notifications.length === 0) return;

    const timer = setTimeout(() => {
      setNotifications((prev) => prev.slice(1)); // Remove the oldest notification
    }, notifications[0].duration);

    return () => clearTimeout(timer);
  }, [notifications]);

  // Notification stack rendered from bottom upwards
  const NotificationComponent = (
    <div className={`${position}  Noti`}>
      {notifications.map((notif) => (
        <Notification
          key={notif.id}
          type={notif.type}
          message={notif.message}
          onClose={() => setNotifications((prev) => prev.filter((n) => n.id !== notif.id))}
          comeFrom={comeFrom}
        />
      ))}
    </div>
  );

  return { NotificationComponent, triggerNotification };
};

export default useNotification;

