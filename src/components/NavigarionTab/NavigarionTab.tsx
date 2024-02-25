import React, { ReactElement, useState } from "react";

import classes from "./NavigarionTab.module.css";

interface NavigarionTabProps {
  config: {
    icon: ReactElement;
    text: string;
    link: string;
  }[];
}

function NavigarionTab({ config }: NavigarionTabProps) {
  const [isActiveToggle, setIsActiveToggle] = useState(0);
  return (
    <div>
      <ul className={classes.navigation}>
        {config.map((item, index) => {
          return (
            <li
              className={index === isActiveToggle ? classes.active : ""}
              key={item.text}
              onClick={() => setIsActiveToggle(index)}
            >
              <a href={item.link}>
                <div className={classes.icon}>{item.icon}</div>
                <span className={classes.text}>{item.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavigarionTab;
