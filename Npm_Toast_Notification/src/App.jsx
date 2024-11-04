import "./App.css";
import useNotification from "./Hooks/use-Notification";

function App() {
  const { NotificationComponent, triggerNotification } = useNotification(
    "bottom-left",
    "top"
  );

  return (
    <div className="main">
      {NotificationComponent}
      <h1>Toast Component</h1>
      <div className="NotificationBox">
        <button
          onClick={() =>
            triggerNotification({
              type: "success",
              message: "This is a success message!",
              duration: 3000,
            })
          } 
        >
          Show Success
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "info",
              message: "This is an info message!",
              duration: 3000,
            })
          }
        >
          Show Info
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "warning",
              message: "This is a warning message!",
              duration: 3000,
            })
          }
        >
          Show Warning
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "error",
              message: "This is an error message!",
              duration: 3000,
            })
          }
        >
          Show Error
        </button>
      </div>
    </div>
  );
}

export default App;
