import React, { useState } from "react";

import calsses from "./CircularNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGamepad,
  faGear,
  faHome,
  faKey,
  faPhone,
  faPlus,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const icons = [
  faEnvelope,
  faGamepad,
  faGear,
  faHome,
  faKey,
  faPhone,
  faUser,
  faVideo,
];
function CircularNavigation() {
  const [isActiveToggle, setIsActiveToggle] = useState(false);
  return (
    <div className={`${calsses.menu} ${isActiveToggle ? calsses.active : ""}`}>
      <div
        className={calsses.toggle}
        onClick={() => setIsActiveToggle(!isActiveToggle)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </div>
      {icons.map((item, index) => {
        return (
          <div
            className={calsses.menu_item}
            style={{
              transform: isActiveToggle
                ? `rotate(calc(360deg / 8 * ${index})`
                : "",
              transitionDelay: `calc(0.1s * ${index})`,
            }}
          >
            <a href="#">
              <FontAwesomeIcon icon={item} color="#000000" />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default CircularNavigation;
