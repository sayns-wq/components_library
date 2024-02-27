import { useState } from "react";
import classes from "./ComponentsBar.module.css";

function ComponentsBar({ components }: any) {
  const [componentToRender, setComponentToRender] = useState(null);
  return (
    <div className={classes.wrapper}>
      <div className={classes.sideBar}>
        {components.map((componentItem: any) => (
          <div
            className={`${classes.item} ${
              componentToRender === componentItem.component
                ? classes.active
                : ""
            }`}
            onClick={() => setComponentToRender(componentItem.component)}
          >
            <span className={classes.text}>{componentItem.name}</span>
          </div>
        ))}
      </div>
      <div className={classes.componentPreview}>{componentToRender}</div>
    </div>
  );
}

export default ComponentsBar;
