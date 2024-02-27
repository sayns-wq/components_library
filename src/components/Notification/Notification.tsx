import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Notification.module.css";
import {
  faCircleInfo,
  faRadiation,
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const variants = {
  worning: {
    color: "#ffff1e",
    icon: faTriangleExclamation,
  },
  info: {
    color: "#0000ff",
    icon: faCircleInfo,
  },
  danger: {
    color: "#ff0000",
    icon: faRadiation,
  },
};

interface NotificationProps {
  variant?: keyof typeof variants;
  text?: string;
}
function Notification({ variant = "info", text = "" }: NotificationProps) {
  const [showNotification, setShowNotification] = useState(true);
  const variantConfig = variants[variant];
  return (
    <>
    {
      showNotification && ( <div
        className={classes.notificationWrapper}
        style={{ borderLeft: `5px solid ${variantConfig.color}` }}
      >
        
        <div className={classes.icon}>
          <FontAwesomeIcon
            icon={variantConfig.icon}
            color={variantConfig.color}
          ></FontAwesomeIcon>
        </div>
        <div className={classes.text} style={{ color: variantConfig.color }}>
          {text}
        </div>
        <div className={classes.close} onClick={() => setShowNotification(false)}>
          <FontAwesomeIcon
            icon={faXmark}
            color='#ff0000'
          ></FontAwesomeIcon>
        </div>
      </div>)

    }
    </>
 
  );
}

export default Notification;
